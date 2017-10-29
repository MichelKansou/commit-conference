import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <div className='container'>
                    <h1 className='title'>Nous contacter</h1>
                    <form className='contact-form'>
                        <div className='row'>
                            <div className='column'>
                                <div className='field'>
                                    <div className='header'>Nom</div>
                                    <input name='name' type='text' placeholder='Votre nom'/>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='field'>
                                    <div className='header'>Nom de la société</div>
                                    <input name='company' type='text' placeholder='Nom de votre société'/>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                            <div className='header'>Email</div>
                            <input name='email' type='text' placeholder='Votre adresse email' />
                        </div>
                        <div className='field'>
                            <div className='header'>Message</div>
                            <textarea name='message' placeholder='Votre message'/>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
