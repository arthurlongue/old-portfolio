import { useRef, useEffect } from "react"
import Scroll from "../../Scroll"
import "./Home.sass"
import MouseScroll from "../../components/MouseScroll/MouseScroll"

export default function Home() {
  const typewritterDiv = useRef()
  let isDeleting = false
  let wordIndex = 0
  let textCopy = ""
  let typeSpeed = 75
  let interval = 75

  const Type = () => {
    const sentences = JSON.parse(
      typewritterDiv.current.getAttribute("data-words")
    )

    const current = wordIndex % sentences.length
    const myText = sentences[current]

    if (isDeleting) {
      textCopy = myText.substring(0, textCopy.length - 1)
      typeSpeed = 25
    } else {
      textCopy = myText.substring(0, textCopy.length + 1)
      typeSpeed = 75
    }

    typewritterDiv.current.textContent = textCopy

    if (!isDeleting && textCopy === myText) {
      isDeleting = true
      typeSpeed = 200
    } else if (isDeleting && textCopy === "") {
      isDeleting = false
      typeSpeed = 1000
      wordIndex++
    }
  }

  useEffect(() => {
    interval = setInterval(() => {
      Type()
    }, typeSpeed)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home">
      <h1 ref={Scroll()} className="welcome animate ">
        Olá, seja bem vindo!
      </h1>
      <span ref={Scroll()} className="animate">
        <div
          className="txt "
          ref={typewritterDiv}
          data-words='["Eu me chamo Arthur...", "Sou um desenvolvedor Web...", "E esse aqui é meu Portfolio."]'></div>
      </span>
      <MouseScroll />
    </section>
  )
}
