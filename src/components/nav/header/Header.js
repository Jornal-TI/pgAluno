import './header.css'
import React, { useEffect, useState } from 'react';
import Logo from '../../../icons/logo.png'


 function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">


            
                <div className="data">
                    <img id='logo' src={Logo}></img>
                    <h1>Área do aluno</h1>
                    <p>{currentDate}</p>
                </div>


            </div>
        
       
    )
}

export default Header;