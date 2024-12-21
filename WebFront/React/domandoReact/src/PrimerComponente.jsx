import React from 'react'
import './PrimerComponente.css'

const number = 123
const string = "Hola buenas"
const sum = () => 2 + 2
const array = [1, 2, 3, 4, 5, 6]
const sumArray = (array) => {
    let sum = 0
    array.forEach(element => {
        sum += element
    });
    return sum
}

const Button = () => {
    return (
        <button></button>
    )
}

function addText() {
    const container = document.getElementById("container")
    let text = container.textContent
    container.innerText = "Hola buenas (Texto añadido) " + text
}

function addImage() {
    const container = document.getElementById("container")

    container.innerHTML += `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM03Q8P1FmISYwpfL9jgsxSml8fXYrS1gLmw&s">
    `
}


export const PrimerComponente = ({titulo}) => {
    return (
        <>
            <h1>Primer componente</h1>
            <h2>{titulo}</h2>
            <p>Numero: {number}</p>
            <p>String: {string}</p>
            <p>Funcion suma: {sum()}</p>
            <p>Array de numeros: {array}</p>
            <p>Suma de array: {sumArray(array)}</p>

            <h2>Probando eventos: </h2>
            <div id='buttonContainer'>
                <button onClick={function printSumar() {console.log(2 + 2)}}>Imprimir una suma</button>
                <button onClick={addText}>Añadir texto</button>
                <button onClick={addImage}>Agregar imagen</button>
            </div>
            <Button />
            
            <div id='container'> </div>            
        </>
    )
}
