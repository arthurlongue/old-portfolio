import { useRef, useEffect, useState } from "react"

export default function Scroll() {
  const [myElementIsVisible, setMyElementIsVisible] = useState()
  const myRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  if (myElementIsVisible) {
    myRef.current.classList.add("show")
  } else if (!myElementIsVisible) {
    myRef.current?.classList.remove("show")
  }

  return myRef
}
