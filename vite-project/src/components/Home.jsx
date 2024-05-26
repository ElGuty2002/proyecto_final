/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../credenciales"; // Importa la configuración de Firebase
import { Lista } from "./ProductList";


const Home = ({ correoUsuario }) => {
const [allProducts, setAllProducts] = useState([]);

    return (
        <div>
            <h2 className='text-center'>Bienvenido usuario {correoUsuario} <button className='btn btn-primary' onClick={() => signOut(auth)}> Logout</button></h2>
            <Lista
                allProducts={allProducts}
                setAllProducts={setAllProducts}
            />
        </div>
    );
}

export default Home;    