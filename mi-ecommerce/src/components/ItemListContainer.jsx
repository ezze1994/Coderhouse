import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-8 text-center bg-white shadow-md rounded-md mx-4 mt-6">
      <h2 className="text-xl font-semibold text-gray-800">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
