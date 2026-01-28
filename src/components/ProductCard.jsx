const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>

      <p className="rating">
        ⭐ {product.rating}
      </p>
    </div>
  );
};

export default ProductCard;
