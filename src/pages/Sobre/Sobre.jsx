import Scroll from "../../Scroll"
import "./Sobre.sass"

export default function Sobre() {
  return (
    <div ref={Scroll()} id="sobre" className={`animate from-top`}>
      <div className="sobre-wrapper">
        <h1 ref={Scroll()} className="animate from-right">
          Sobre mim
        </h1>
        <img
          ref={Scroll()}
          className="profile-pic animate from-bottom"
          src="assets/foto perfil.jpeg"
          alt="avatar pic"
        />
        <p ref={Scroll()} className="animate from-left">
          Me chamo Arthur Longue, 24 anos, moro em Vitória - ES. Apaixonado em
          técnologia e jogos desde criança. Meu primeiro contato com a
          programação foi cursando Estatística, aprendendo C. Me formei em
          Gastronomia recentemente mas decidi retornar à programação,
          aproximadamente 1 ano de estudo, logo abaixo alguns dos meus projetos.
        </p>
      </div>
    </div>
  )
}
