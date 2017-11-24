import React, { Component } from 'react';

export default class Sponsor extends Component {
    render() {
        return (
            <section id='sponsor'>
                <div className='container'>
                    <h2 className='title'>Sponsors</h2>
                    <div className='short-text'>
                        <p>Nos formidables partenaires nous aident à garder des billets abordables, organisent de superbes ateliers et vous accueillent dans leurs stands.</p>
                        <p>Si vous voulez être l'un d'entre eux, contactez-nous.</p>
                        <p>Pour en savoir plus sur nos partenaires, cliquez sur leur logo!</p>
                    </div>
                    <div className='row'>
                        <a href='#'><img className='partner-logo' src='./images/commit-logo.png' alt='Commit Conference Partner'></img></a>
                    </div>
                </div>
            </section>
        );
    }
}
