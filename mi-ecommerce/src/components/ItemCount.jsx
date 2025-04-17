import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <button onClick={decrement} className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>{quantity}</span>
        <button onClick={increment} className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>
      <button
        onClick={() => onAdd(quantity)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
