import { Link } from "react-router-dom";

export default function Card({ id, title, image, price, rating, rateCount }) {
  return (
    <div className="flex bg-white shadow-xl/20 w-40 h-100 sm:w-100 m-auto p-5 justify-center flex-col">
      <img src={image} className="w-50 h-50 m-auto" />
      <h2 className="text-center font-bold mb-4"> {title} </h2>
      <p className="font-bold m-auto text-2xl text-blue-800"> R${price}</p>
      <div className="m-auto pt-5 flex gap-4 items-center">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/148/148839.png"}
          width={30}
          height={30}
        />
        <p className="text-center font-bold">
          {rating} / {rateCount} classificações
        </p>
      </div>

      <div className="m-auto bg-blue-700 text-white rounded-md p-2">
        <Link to={`product/${id}`}>Visualizar produto </Link>
      </div>
    </div>
  );
}
