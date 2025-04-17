import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">${item.price}</p>
      <Link
        to={`/item/${item.id}`}
        className="mt-2 inline-block text-blue-600 hover:underline"
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
