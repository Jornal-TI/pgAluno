import React from "react";
import './nav.css';
import Lapis from "../../icons/lapis.svg"
import relogio from "../../icons/relogio.svg"
import Livro from "../../icons/livro.svg"
import Licao from "../../icons/licao.svg"
import Usuario from "../../icons/usu.svg"



function Nav() {
  return (
    <div>
      <div className="navbar">

        <br/>
        <br/>
        <button><img src={Lapis}/>Notas</button>
        <br/>
        <br/>
        <br/>
        <button><img src={relogio}/>Horário</button>
        <br/>
        <br/>
        <br/>
        <button><img src={Livro}/>Biblioteca</button>
        <br/>
        <br/>
        <br/>
        <button><img src={Licao}/>Atividades</button>
        <br/>
        <br/>
        <br/>
        <button><img src={Usuario}/>Meus Dados</button>




      </div>
    </div>
  )
}

export default Nav;


