import classNames from 'classnames';
import React, { useState } from 'react';
import "../card/cardStyle.css"
import styled from 'styled-components'

const App = styled.div`
   display: block;
    display: flex;
    flex-direction:row;
    align-items: center;
`
const Titulo = styled.h1`
color: white;
font-size:16px;
margin-left: 2%;
`
const Imagem = styled.div`
`
const Desc = styled.h1`
font-size: 15px;
color: white;
`
const Type = styled.h1`
color: white;
font-size: 15px;
`

export default function Card(props) {

    const [isOpen, setIsOpen] = useState(false);

    const onClickHeader = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <App>
                <div className='box'>
                    <p onClick={onClickHeader} className='title'>Clique Aqui <i className='arrow-up'></i></p>
                    <div onClick={onClickHeader} className={classNames('description', { 'description-active': isOpen, 'color-active': isOpen })}>
                        <Titulo>{props.title}</Titulo>
                        <Imagem>{props.img}</Imagem>
                        <Desc>{props.desc}</Desc>
                        <Type>{props.type}</Type>
                    </div>
                </div>
            </App>
        </div>

    );
}