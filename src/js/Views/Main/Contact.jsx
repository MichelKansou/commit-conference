import React, { Component } from 'react';
import Button from '../../Components/Button';


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            success: false
        };
    };

    sendEmail = () => {
        let form = document.querySelector('form')

        let name = this.nameRef.value
        let email = this.emailRef.value
        let companyName = this.companyNameRef.value
        let message = this.messageRef.value
        let subjectRef = "Commit Contact"
        if (name && email && message && subjectRef && companyName) {
            this.setState({ loading: true });
            return fetch('https://formspree.io/commit-event@outlook.fr', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    companyName: companyName,
                    message: message,
                    subject: subjectRef
                })
            }).then((res)=> {
                if (res.status == 400) {
                    this.setState({
                        success: false,
                        loading: false,
                        message: "une erreur s'est produite vous pouvez nous contacter directement à l'adresse suivante : commit-event@outlook.fr"
                    });
                    form.reset();
                } else {
                    this.setState({
                        success: true,
                        loading: false,
                        message: 'Merci, votre message a bien été envoyé.'
                    });
                    form.reset();
                    console.log(res);
                }
            });
        } else {
            this.setState({
                success: false,
                message: 'Veuillez remplir tous les champs.'
            });
        }
    }

    render() {

        const { success, loading, message } = this.state;
        return (
            <section id='contact'>
                <div className='container'>
                    <h1 className='title'>Nous contacter</h1>
                    <div className='form-container'>
                        <form>
                            <div className='row'>
                                <div className='column'>
                                    <div className='field'>
                                        <div className='header'>Nom</div>
                                        <input name='name' type='text' placeholder='Votre nom' ref={(ref) => this.nameRef = ref} />
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='field'>
                                        <div className='header'>Nom de la société</div>
                                        <input name='company' type='text' placeholder='Nom de votre société' ref={(ref) => this.companyNameRef = ref} />
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='header'>Email</div>
                                <input name='email' type='text' placeholder='Votre adresse email' ref={(ref) => this.emailRef = ref} />
                            </div>
                            <div className='field'>
                                <div className='header'>Message</div>
                                <textarea name='message' placeholder='Votre message' ref={(ref) => this.messageRef = ref} />
                            </div>
                        </form>
                        <Button loading={loading} call={() => this.sendEmail()} text='Envoyer' />
                        {message ? <p className={this.state.success ? 'message positive' : 'message negative'}>{message}</p>: null}
                    </div>
                </div>
            </section>
        );
    }
}
