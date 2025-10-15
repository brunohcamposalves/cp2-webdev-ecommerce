import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
      <ProductSection title={"Eletrônicos"} />
      <ProductSection title={"Roupas"} />
      <ProductSection title={"Joias"} />
    </div>
  );
}
