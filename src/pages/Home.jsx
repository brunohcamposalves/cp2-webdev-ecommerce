import { useEffect, useState } from "react";
import ProductSection from "../components/ProductSection";

export default function Home() {
  const [products, setProducts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = (categoryFilter) => {
    return products.filter((product) => product.category === categoryFilter);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold m-4">Bem-vindo ao Fiap Commerce!</h2>
      <ProductSection
        title={"Eletrônicos"}
        products={filteredProducts("electronics")}
      />
      <ProductSection
        title={"Roupas Masculinas"}
        products={filteredProducts("men's clothing")}
      />
      <ProductSection
        title={"Roupas Femininas"}
        products={filteredProducts("women's clothing")}
      />
      <ProductSection title={"Jóias"} products={filteredProducts("jewelery")} />
    </div>
  );
}
