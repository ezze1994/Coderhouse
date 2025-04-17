const products = [
    { id: '1', name: 'Producto 1', category: 'ropa', price: 100 },
    { id: '2', name: 'Producto 2', category: 'electro', price: 200 },
    { id: '3', name: 'Producto 3', category: 'ropa', price: 150 },
    { id: '4', name: 'Producto 4', category: 'electro', price: 350 },
    { id: '5', name: 'Producto 5', category: 'ropa', price: 90 },
    { id: '6', name: 'Producto 6', category: 'muebles', price: 500 },
    { id: '7', name: 'Producto 7', category: 'ropa', price: 120 },
    { id: '8', name: 'Producto 8', category: 'electro', price: 450 },
    { id: '9', name: 'Producto 9', category: 'muebles', price: 700 },
    { id: '10', name: 'Producto 10', category: 'ropa', price: 80 },
    { id: '11', name: 'Producto 11', category: 'muebles', price: 350 },
    { id: '12', name: 'Producto 12', category: 'electro', price: 180 },
    { id: '13', name: 'Producto 13', category: 'ropa', price: 60 },
    { id: '14', name: 'Producto 14', category: 'muebles', price: 650 },
    { id: '15', name: 'Producto 15', category: 'electro', price: 1200 },
  ];
  
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000);
    });
  };
  