import React from "react";
import './nav.css';
import Lapis from "../../icons/lapis.png"
import Horario from "../../icons/relogio.png"
import Livro from "../../icons/livro.png"
import Licao from "../../icons/licao.png"
import Usuario from "../../icons/usuario.png"




function Nav() {
  return (
    <div>
      <h1>Área do aluno</h1>
      <div className="navbar">

        <button><img src={Lapis}></img>Notas</button>
        <button><img src={Horario}></img>Horário</button>
        <button><img src={Livro} />Biblioteca</button>
        <button><img src={Licao} />Atividades</button>
        <button><img src={Usuario} />Meus Dados</button>




      </div>
    </div>
  )
}

export default Nav;


