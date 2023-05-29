import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '50%' }}>
                            <div className='product-item'>
                                <img src={productItem.imageUrl} width="40%" />
                                <p>{productItem.name}</p>
                                <p> Rs. {productItem.price} </p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList

