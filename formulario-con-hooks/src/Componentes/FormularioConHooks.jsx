import { useState } from "react";
import "./FormularioConHooks.css";

const Formulario = (props) => {
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");
    const [ConfirmContraseña, setConfirmContraseña] = useState("");


    return (
        <form>
            <div className="inputForm">
                <label>Nombre: </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div className="inputForm">
                <label>Apellido: </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div className="inputForm">
                <label>Correo Electrónico: </label>
                <input type="email" onChange={(e) => setCorreo(e.target.value)} />
            </div>

            <div className="inputForm">
                <label>Contraseña: </label>
                <input type="password" onChange={(e) => setContraseña(e.target.value)} />
            </div>

            <div className="inputForm">
                <label>Confirmar Contraseña: </label>
                <input type="password" onChange={(e) => setConfirmContraseña(e.target.value)} />
            </div>
            <br />

            <div>
                <h2> Datos de tu Formulario</h2>
                <ul>
                    <li>Nombre: {Nombre} </li>
                    <br />
                    <li>Apellido: {Apellido} </li>
                    <br />
                    <li>Correo Electrónico: {Correo} </li>
                    <br />
                    <li> Contraseña: {Contraseña}</li>
                    <br />
                    <li> Confirmar Contraseña: {ConfirmContraseña} </li>
                </ul>
            </div>

        </form>
    );
}

export default Formulario;