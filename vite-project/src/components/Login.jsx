import React, { useState } from 'react';
import imageProfile from '../assets/tumaridoramondino.png';
import imagenModa from '../assets/moda.jpeg';
import { auth } from '../credenciales'; // Importa la configuración de Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [registrando, setRegistrando] = useState(false);

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert("Asegúrate de que la contraseña tenga mínimo 8 caracteres");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert("El correo o la contraseña son inválidos");
            }
        }
    };

    return (
        <div className='supercontainer'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className='padre'>
                            <div className="card card-body shadow-lg">
                                <img src={imageProfile} alt="" className='estilo-profile' />
                                <form onSubmit={functAutenticacion}>
                                    <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email' />
                                    <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
                                    <button className='btnForm'>{registrando ? "Regístrate" : "Inicia sesión"}</button>
                                </form>
                                <h4 className='texto'>
                                    {registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}
                                    <button className='btnswitch' onClick={() => setRegistrando(!registrando)}>
                                        {registrando ? "Inicia sesión" : "Regístrate"}
                                    </button>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={imagenModa} alt="" className='tamaño-moda' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
