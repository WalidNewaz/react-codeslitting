import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default Product;