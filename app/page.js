'use client';
import styles from "./page.module.css";
import { useState, useEffect } from "react"; 
import Markdown from "react-markdown"


function Answer({ quest }) {
  const [data, setData] = useState("Esperando pregunta ...")
 
  useEffect(() => {
    if (quest) {
      console.log(quest)
      setData("Generando ...")
      fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application-json"
        },
        body: JSON.stringify({quest : quest})
        }
      )
      .then(res => res.json())
      .then(data => setData(data.candidates[0].content.parts[0].text))
      
    } else {
      setData("Esperando pregunta ...")
    }
  }, [quest])
 
  return (
    <div id={styles.answer}><Markdown>{data}</Markdown></div>
  )
}



export default function Home() {
  const [pregunta, setPregunta] = useState("")

  useEffect(() => {
    document.addEventListener("keypress", e => {
      if (e.key == "Enter") {
        e.preventDefault()
        console.log("preguntando:")
        let question = document.querySelector("input").value
        if (question) setPregunta(question)
      }
    })
  }, [])

  return (
    <>
      <div className={styles.formulario}>
        <input type="text" id={styles.preguntaBox}/>
        <button onClick={() => {
          let question = document.querySelector("input").value
          if (question) setPregunta(question)
        }}>Preguntar</button>
      </div>
      <Answer quest={pregunta}/>
    </>
  )
}
