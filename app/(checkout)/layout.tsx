import { Container, Header } from "@/shared/components/shared";
import { Suspense } from "react";

export const metadata = {
  title: "Expensive Pizza | Cart",
  description: "Generated by Next.js",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Suspense>
        <Header hasSearch={false} hasCart={false} className="border-gray-200" />
      </Suspense>

      <Container>{children}</Container>
    </main>
  );
}
