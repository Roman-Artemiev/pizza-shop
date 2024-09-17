import { categories, ingredients } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Alice',
                email: "test@emial.cad",
                password: hashSync("password", 10),
                verified: new Date(),
                role: "USER",
            },
            {
                fullName: 'Admin',
                email: "admin@admin.com",
                password: hashSync("password123", 10),
                verified: new Date(),
                role: "ADMIN",
            },
        ]
    })


    await prisma.category.createMany({
        data: categories,
    })

    await prisma.ingredient.createMany({
        data: ingredients,
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect();
    process.exit(1);
})