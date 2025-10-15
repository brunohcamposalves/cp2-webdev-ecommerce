import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Product() {
  const [product, setProduct] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const params = useParams();

  useEffect(() => {
    fetch(`${API_URL}/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Card
        {...product}
        rating={product?.rating?.rate}
        rateCount={product?.rating?.count}
      />
    </div>
  );
}
