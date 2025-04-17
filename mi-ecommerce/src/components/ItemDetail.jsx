import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => (
  <div>
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <ItemCount stock={10} initial={1} onAdd={(qty) => console.log(`Agregaste ${qty}`)} />
  </div>
);

export default ItemDetail;
