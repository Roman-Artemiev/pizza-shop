import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/shared/lib";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;
    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    }

    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        quantity: 1,
        ingredients: {
          connect: data.ingredients?.map((id) => ({ id })),
        },
      }
    });

    const updateUserCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updateUserCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create cart" },
      { status: 500 }
    );
  }
}
