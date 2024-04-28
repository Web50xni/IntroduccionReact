import React, { useState } from 'react'

const PrimerComponente = () => {
    // let nombre1 = "Lia";
    let carrera = "Ingenieria en Computacion";

    let mascotas = [
        "yuki",
        "Dapnhe",
    ];

    const [nombre, setNombre] = useState("Lia")

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div>
            <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
            <p>Mi carrera es: {carrera}</p>

            <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambiar'></input>

            <button onClick={e => {
                console.log("El valor del estado actual es: ", { nombre })
            }}>Mostrar estado en consola</button>

            <button onClick={e => cambiarNombre("Carely")}>Cambiar nombre</button>


            <h2>Mascotas</h2>
            <ul>
                {
                    mascotas.map((mascotas, indice) => {
                        return (<li key={indice}>
                            {mascotas}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default PrimerComponente
