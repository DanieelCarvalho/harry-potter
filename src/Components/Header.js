import React, { useState } from 'react'
import { BrowserRouter, Link, Route , Routes } from 'react-router-dom';
import Home from './Home';
import Grifinória from './Grifinória';
import Sonserina from './Sonserina';
import Corvinal from './Corvinal';
import LufaLufa from './LufaLufa';
import foto1 from '../img/menubranco.png'
import foto2 from '../img/xbranco.png'

import * as S from '../Style/HeaderStyle'
import axios from 'axios'


function Header(){
    const [open, setOpen] = useState(false)

    const Modal = () =>{
        return(
            <nav>
            <S.Ul>
                <li>
                    <S.Menu to='/'>Início</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Grifinória'>Grifinória</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Sonserina'>Sonserina</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Corvinal'>Corvinal</S.Menu>
                </li>
                <li>
                    <S.Menu to='/LufaLufa/'>Lufa-Lufa</S.Menu>
                </li>
            </S.Ul>
        </nav>
        )
        
    };
 
    return(       
        <BrowserRouter>
        <S.Modal>
        <button  onClick={() =>{
                setOpen(!open)
            }}>
           {open ===true ? <S.Foto src={foto2} alt="oi" /> :  <S.Foto src={foto1} alt="X"/>}
        </button>
       
        {open && Modal()}
      
        </S.Modal>

        <S.Nav>
            <S.Ul>
                <li>
                    <S.Menu to='/'>Início</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Grifinória'>Grifinória</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Sonserina'>Sonserina</S.Menu>
                </li>
                <li>
                    <S.Menu to='/Corvinal'>Corvinal</S.Menu>
                </li>
                <li>
                    <S.Menu to='/LufaLufa/'>Lufa-Lufa</S.Menu>
                </li>
                
            </S.Ul>
          


        </S.Nav>
           
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Grifinória/' element={<Grifinória/>}/>
                <Route path='/Sonserina/' element={<Sonserina/>}/>
                <Route path='/Corvinal/' element={<Corvinal/>}/>
                <Route path='/LufaLufa/' element={<LufaLufa/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Header;