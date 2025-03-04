import Product from "./Product";

const ProductsList = (props) => {
  return (
    <ul className="store-front">
      {props.products.map((product) => (
        <li key={product.id}>
          <Product details={product} />
          <button
            className="btn-outline btn-delete"
            onClick={() => props.onDeleteClick(product.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
