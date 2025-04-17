import React from 'react';

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Página no encontrada</p>
      </div>
    </div>
  );
}

export default NotFound;
