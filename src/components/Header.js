import React from 'react'
import logoImage from '../assets/logo-quiz.png'

export default function Header() {
    return (
       <header className='header--container'>
            <img className='header--img' src={logoImage} alt='Quizz Break' />
            <h1 className='header--title'>Quizz Break</h1>
            <h3 className='header--descr'>Web dynamique - Final project</h3>
       </header>
    )
}