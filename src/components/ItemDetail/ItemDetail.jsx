import React from 'react'

const ItemDetail = ({ product }) => {
    return (
        <div className="row">
            <div className="col">
                <center>
                    <h2 className="m-5">Product</h2>
                </center>
                <p>Categoria: {product.categoria}</p>
                <p>Precio: {product.precio}</p>
                <p>Stock: {product.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail