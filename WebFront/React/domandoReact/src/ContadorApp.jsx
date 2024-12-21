import {useState} from 'react'

function handleClick(event) {
    console.log(event)
}

function handleClickWithImage () {
    divContainer = document.getElementById("divContainer")
    divContainer.innerHTML += `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM03Q8P1FmISYwpfL9jgsxSml8fXYrS1gLmw&s">`
}

const Button = () => {
    return (
        <button onClick={handleClickWithImage}>Soy otro boton</button>
    )
}


export const ContadorApp = ({value}) => {

    const [counter, setCounter] = useState(value)
    function count() {
        setCounter(counter + 10)
    }
    const [text, setText] = useState("")
    function addText(event) {
        console.log(event)
        event.preventDefault()
        setText(text + document.getElementById('text').value)
    }
    
    return (
        <>
        <button onClick={function () {console.log("Hola buenas")}}>Soy un boton</button>
        <button onClick={handleClick}>Soy un boton mas</button>
        <Button/>
        <div>Contador: </div>
        <button onClick={count}>Sumar</button>
        <p>{counter}</p>

        <div id="divContainer"></div>
        <form action="" onSubmit={addText}>
            <input type="text" placeholder='Ponga algo' id='text'/>
            <button type="submit">Enviar</button>
            <p>{text}</p>
        </form>
        </>
    )
}
