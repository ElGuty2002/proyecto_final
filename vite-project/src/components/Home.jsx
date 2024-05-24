/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
/*import { Cabeza } from './Header';*/
import { Lista } from './ProductList';





const Home = ({correoUsuario}) => {
    const auth = getAuth(appFirebase);
    const [allProducts, setAllProducts] = useState([]);
    /*const [total, setTotal] = useState(0);*/
    /*const [countProducts, setCountProducts] = useState(0);*/
    return (
        <div>
                                        
            <h2 className='text-center'>Bienvenido usuario {correoUsuario} <button className='btn btn-primary' onClick={() => signOut(auth)}> Logout</button></h2>
            <>
                <Lista
                allProducts={allProducts} 
                setAllProducts={setAllProducts}
                />
                
            </>
        </div> 

    );
}
export default Home;

