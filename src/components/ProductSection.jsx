export default function ProductSection({ title, products }) {
  return (
    <section className="m-10">
      <h2 className="text-2xl font-bold"> {title} </h2>
      <h4> Produtos em destaque</h4>
      <div>
        {products.map((product) => {
          <p> {product.title} </p>;
        })}
      </div>
    </section>
  );
}
