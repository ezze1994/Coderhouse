import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts } from "../data/products";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        setItems(products.filter((prod) => prod.category === categoryId));
      } else {
        setItems(products);
      }
    });
  }, [categoryId]);

  return (
    <div className="p-6">
      {!categoryId && greeting && (
        <div className="p-8 text-center bg-white shadow-md rounded-md mx-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">{greeting}</h2>
        </div>
      )}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;