/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import imageProfile from '../assets/tumaridoramondino.png'
import imagenModa from '../assets/moda.jpeg'

import appFirebase from '../credenciales';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("asegurese que la contraseña tenga minimo 8 caracteres")
            }
        }
        else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
              alert("El correo o la contraseña son invalidos")  
            }          
        }
    }

    return (
        <div className='supercontainer'>
        <div className ='container'> 
            <div className="row">
                {/*columna mas pequeña para el formulario*/}
                <div className="col-md-4">
                    <div className='padre'>
                        <div className="card card-body shadow-lg" >
                            <img src={imageProfile} alt="" className='estilo-profile' />
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                                <input type="password" placeholder='ingresar contraseña' className='cajatexto' id='password'/>
                                <button className='btnForm' >{registrando ? "registrate" : "inicia sesion"}</button>
                            </form>
                            <h4 className='texto'>{registrando ? "si ya tienes cuenta" : "no tienes cuenta?"}    <button className='btnswitch'onClick={()=>setRegistrando(!registrando)}>{registrando ? "inicia sesion" : "registrate"}</button></h4>

                        </div>
                    </div>
                </div>
                {/*columna grande*/}
                <div className="col-md-8">
                    <img src={imagenModa} alt="" className='tamaño-moda' />
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default Login;
