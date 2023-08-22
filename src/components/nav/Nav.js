import React from "react";
import './nav.css';
import styled from 'styled-components';


function Nav() {
  return (
    <div>
      <h1>Jornal senac</h1>
      <div className="navbar">
     
        <button>Notas e Frequência</button>
        <button>Horário</button>
        <button>Biblioteca</button>
        <button>Atividades</button>
        <button>Meus Dados</button>
        

        {/* <StyledButton>Item 1 do menu</StyledButton>
        <StyledButton>Item 2 do menu</StyledButton>
        <StyledButton>Item 3 do menu</StyledButton>
        <StyledButton>Item 4 do menu</StyledButton>
        <StyledButton>Item 5 do menu</StyledButton> */}
      </div>
    </div>
  )
}

export default Nav;


const StyledButton = styled.button`
background-color: #007bff;
color: white;
margin: 10px;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
`;