export default function Card({ title, image, price }) {
  return (
    <div className="bg-white shadow-xl/20 w-full sm:w-100 m-auto p-5">
      <img src={image} />
      <h2 className="text-center font-bold mb-4"> {title} </h2>
      <p>Preço: {price}</p>
    </div>
  );
}
