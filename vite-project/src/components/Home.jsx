/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../credenciales"; // Importa la configuración de Firebase
import { Lista } from "./ProductList";
import { Torneo} from './ListaTorneos';

const Home = ({ correoUsuario }) => {
    const [Torneo, setTorneo] = useState([]);

    useEffect(() => {
        const obtenerTorneos = async () => {
            const querySnapshot = await getDocs(collection(db, 'torneo'));
            const datosTorneo = [];
            querySnapshot.forEach(doc => {
                datosTorneo.push({ id: doc.id, ...doc.data() });
            });
            setTorneo(datosTorneos);
        };

        obtenerTorneo();
    }, []);

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