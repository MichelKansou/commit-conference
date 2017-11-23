import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        // <a className='btn' href="https://www.eventbrite.fr/e/billets-commit-39608560270">Inscrivez vous !</a>
        return (
            <section id='home'>
                <div className='container'>
                    <img className='icon-image triangle' alt='background-icons' src='./images/background icons/Triangle.png'></img>
                    <img className='icon-image circle' alt='background-icons' src='./images/background icons/Circle.png'></img>
                    <img className='icon-image rectangle' alt='background-icons' src='./images/background icons/Rectangle.png'></img>
                    <img className='icon-image x' alt='background-icons' src='./images/background icons/X.png'></img>
                    <img className='icon-image rectangle2' alt='background-icons' src='./images/background icons/Rectangle 2.png'></img>
                    <img className='icon-image circle2' alt='background-icons' src='./images/background icons/Circle 2.png'></img>
                    <div className='card'>
                        <img className='main-logo' alt='commit logo' src='./images/commit-logo.png'></img>
                        <h1 className='title'>Participez, Anticipez, Agissez</h1>
                        <h2 className='description'>Venez et découvrez les futures problématiques d’entreprise en 2020 </h2>
                        <h4 className='date'>25 - 26 Janvier, 2018 • Arras, France</h4>
                    </div>
                </div>
            </section>
        );
    }
}
