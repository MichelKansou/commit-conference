import React, { Component } from 'react';

export default class Plan extends Component {
    render() {
        return (
            <section id='plan'>
                <div className='container'>
                    <h2 className='title'>Planning</h2>
                    <h4 className='date'>25 Janvier 2018</h4>
                    <div className='grid'>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <img src='' className='subject-logo'></img>
                                    <h3 className='subject-title'>Ordinateurs quantiques</h3>
                                    <h4 className='subject-description'>Comment assurer la pérénité des données après l'apparition des ordinateurs quantiques pour les entreprises françaises ?</h4>
                                    <h5 className='subject-date'>25 janvier 2018, 13h30 - 14h30</h5>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <img src='' className='subject-logo'></img>
                                    <h3 className='subject-title'>Reactive System</h3>
                                    <h4 className='subject-description'>Améliorez la disponibilité de votre application avec Spring et les systèmes réactifs</h4>
                                    <h5 className='subject-date'>25 janvier 2018, 13h30 - 14h30</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <img src='' className='subject-logo'></img>
                                    <h3 className='subject-title'>Ordinateurs quantiques</h3>
                                    <h4 className='subject-description'>Comment assurer la pérénité des données après l'apparition des ordinateurs quantiques pour les entreprises françaises ?</h4>
                                    <h5 className='subject-date'>25 janvier 2018, 13h30 - 14h30</h5>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <img src='' className='subject-logo'></img>
                                    <h3 className='subject-title'>Reactive System</h3>
                                    <h4 className='subject-description'>Améliorez la disponibilité de votre application avec Spring et les systèmes réactifs</h4>
                                    <h5 className='subject-date'>25 janvier 2018, 13h30 - 14h30</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
