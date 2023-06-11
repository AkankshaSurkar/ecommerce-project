import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "50%" }}>
            <div className="product-item">
              <img src={productItem.imageUrl} width="40%" alt=""/>
              <li key={productItem.id}></li>
              <p>{productItem.name}</p>
              <p> $ {productItem.price} </p>
              <button className="action" onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
