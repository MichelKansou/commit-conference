import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <section id='home'>
                <div className='container'>
                    <div className='card'>
                        <img className='main-logo' alt='commit logo' src='./images/commit-logo.png'></img>
                        <h1 className='title'>Une Conférence dans le futur</h1>
                        <h2 className='description'>Venez et découvrez les futures problématiques d’entreprise en 2020 </h2>
                        <h4 className='date'>25 - 26 Janvier, 2018 • Paris, France</h4>
                        <button className='btn'>Inscrivez vous !</button>
                    </div>
                </div>
            </section>
        );
    }
}
