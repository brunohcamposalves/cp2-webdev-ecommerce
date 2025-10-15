import Card from "./Card";

export default function ProductSection({ title, products }) {
  return (
    <section className="m-10">
      <h2 className="text-2xl font-bold"> {title} </h2>
      <h4> Produtos em destaque</h4>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            {...product}
            rating={product.rating.rate}
            rateCount={product.rating.count}
          />
        ))}
      </div>
    </section>
  );
}
