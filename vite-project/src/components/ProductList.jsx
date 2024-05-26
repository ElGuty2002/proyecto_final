import React from "react";
import { data } from '../data';

export const Lista = ({ allProducts, setAllProducts }) => {

    const onAddProduct = (product) => { 
        setAllProducts([...allProducts, product]);
    };
    
    return (
        <div className='container-items'>
            {allProducts.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>Cantidad máxima de participantes: {product.cantidad_max_participantes}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Agregar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
