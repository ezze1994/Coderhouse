import React from "react";

const CartWidget = () => {
  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span className="text-2xl">🛒</span>
      <span className="text-sm font-semibold">(0)</span>
    </div>
  );
};

export default CartWidget;
