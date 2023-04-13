import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FirstPost() {

    const [food, setFood] = useState('empty')
    const [userInput, setUserInput] = useState('empty')

    useEffect(() => {
        console.log('fetching');
        fetch('http://localhost:3001/getFood')
        .then(response => response.text())
        .then(foodResponse => setFood(foodResponse));
    }, [])

    const saveUserInput = (e) => {
        setUserInput(e.target.value)
    }

    const sendToServer = () => {
        console.log(userInput);
        fetch("http://localhost:3001/receiveInput", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({userInput})
          })
          .then(res => console.log("Request complete! response:", res));
    }

    return (
        <>
        <Head><title>Firsttt</title> </Head>
            <h1>First Post!!</h1>
            <h1>Here comes some food:</h1>
            <p>{food}</p>
            <input onChange={(e) => saveUserInput(e)}></input>
            <button onClick={sendToServer}>Send to server</button>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}