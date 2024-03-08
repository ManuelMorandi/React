function ProductCard({ product }) {
    return (
        <div className="card">
                <img src={product.image} />
            <div className="info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h5>{product.price}</h5>
            </div>
        </div>
    )
}

export default ProductCard;