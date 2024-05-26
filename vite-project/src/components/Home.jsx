/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { signOut, getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { appFirebase } from "../credenciales"; // Asegúrate de la ruta correcta
import { db, auth } from "../credenciales"; // Importa la configuración de Firebase
import { Lista } from "./ProductList";
import { data } from "../data";




const Home = ({ correoUsuario }) => {
    const auth = getAuth(appFirebase);
    const [allProducts, setAllProducts] = useState([]);
    

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