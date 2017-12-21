import React, { Component } from 'react';

export default class Sponsor extends Component {
    render() {
        return (
            <section id='sponsor'>
                <div className='container'>
                    <h2 className='title'>Partenaires</h2>
                    <div className='short-text'>
                        <p>Nos formidables partenaires nous aident à rendre cet événement possible, et peuvent prendre part à la conférence.</p>
                        <p>Si vous voulez être l'un d'entre eux, contactez-nous.</p>
                        <p>Pour en savoir plus sur nos partenaires, cliquez sur leur logo !</p>
                    </div>
                    <div className='row'>
                        <a target="_blank" rel='noopener noreferrer' href='https://www.adoc-it.com/'><img className='partner-logo' src='./images/partners/adoc-it-logo.png' alt='Commit Conference Partner'></img></a>
                        <a target="_blank" rel='noopener noreferrer' href='http://www.regiefete.fr/'><img className='partner-logo transparent' src='./images/partners/logo_main_300.png' alt='Commit Conference Partner'></img></a>
                    </div>
                </div>
            </section>
        );
    }
}
