'use client';
import { useState, useEffect } from "react"; 
import Markdown from "react-markdown"
import styles from "./page.module.css";

function Msg () {
  return (
    <>
      <article>
        <h4>🔵 Model :</h4>
        <p>lorem ipsum ohhhhhasdsadasdsadasda  sdfdsf sdfdsf sdfsdf sdfsd sdf     dhnfghnfghnghn</p>
      </article>
    </>
  )
}

export default function Home() {
  const [history, setHistory] = useState([])

  useEffect(() => {}, [])

  return (
    <>
    <header>
          <div>
            <div className="head-title">
              <h2>AI ChatBot 🦾</h2>
              <p>Hecho con amor por Julius 💙</p>
            </div>
            <div className="new-chat-button">
              <button><svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
              </svg>
              </button>
              <p>New Chat</p>
            </div>
          </div>
        </header>
        <main>
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
        </main>
        <footer>
          <div className="search">
            <input placeholder="Ask something ..." type="text"></input>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663" height="15" width="15">
              <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="white" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
            </svg>
          </button>
          </div>
        </footer>
    </>
  )
}
