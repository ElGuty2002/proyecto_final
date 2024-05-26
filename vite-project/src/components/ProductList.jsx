
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import {data} from '../data'

export const Lista = ({allProducts, setAllProducts}) => {

    const onAddProduct = (product) => { 
        setAllProducts([...allProducts, product])
    };
        console.log(allProducts)
    return (
        <>
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick={()=> onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
        </>  
	);
};
