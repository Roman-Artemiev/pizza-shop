import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "Code is missing" }, { status: 404 });
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
      },
    });

    if (!verificationCode) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }

    await prisma.user.update({
      where: {
        id: verificationCode.userId,
      },
      data: {
        verified: new Date(),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    });

     return NextResponse.redirect(new URL("/?verified", req.nextUrl.origin));
  } catch (error) {
    console.log("[VerifyEmail] Server error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
