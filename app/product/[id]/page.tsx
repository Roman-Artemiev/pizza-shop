export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}
