import { useEffect, useState } from "react"
import "./Nav.sass"

const Nav = () => {
  const [section, setSection] = useState("home")

  useEffect(() => {
    window.location = "#"
  }, [])

  return (
    <nav>
      <ul>
        <li>
          <a
            className={`${section == "home"}`}
            onClick={() => setSection("home")}
            href="#">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a
            className={`${section == "sobre"}`}
            onClick={() => setSection("sobre")}
            href="#sobre">
            <i className="fa-solid fa-address-card"></i>
          </a>
        </li>
        <li>
          <a
            className={`${section == "projetos"}`}
            onClick={() => setSection("projetos")}
            href="#projetos">
            <i className="fa-solid fa-folder-open"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
