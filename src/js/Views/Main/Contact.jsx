import React, { Component } from 'react';
import Button from '../../Components/Button';


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            success: false,
            fields: {},
            errors: {}
        };
    };

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
        this.handleValidation();
    }

    handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            //Email
            if(!fields["email"]){
               formIsValid = false;
               errors["email"] = "L'email est vide";
            }

            if(!fields["name"]){
               formIsValid = false;
               errors["name"] = "Le champ Nom est vide";
            }

            if(!fields["message"]){
               formIsValid = false;
               errors["message"] = "Le champ message est vide";
            }

            if(typeof fields["email"] !== "undefined"){
                let lastAtPos = fields["email"].lastIndexOf('@');
                let lastDotPos = fields["email"].lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                  formIsValid = false;
                  errors["email"] = "L'email renseigné n'est pas valide";
                }
           }

           this.setState({errors: errors});
           return formIsValid;
       }

    sendEmail = () => {
        let form = document.querySelector('form')
        let fields = this.state.fields;

        if (this.handleValidation()) {
            this.setState({ loading: true });
            return fetch('https://formspree.io/commit-event@outlook.fr', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fields["name"],
                    email: fields["email"],
                    companyName: fields["companyName"] ? fields["companyName"] : "",
                    message: fields["message"],
                    subject: "Commit Contact"
                })
            }).then((res)=> {
                if (res.ok) {
                    this.setState({
                        success: true,
                        loading: false,
                        message: 'Merci, votre message a bien été envoyé.'
                    });
                    form.reset();
                    console.log(res);
                } else {
                    this.setState({
                        success: false,
                        loading: false,
                        message: "une erreur s'est produite vous pouvez nous contacter directement à l'adresse suivante : commit-event@outlook.fr"
                    });
                    form.reset();
                }
                console.log(res);
            });
        } else {
            this.setState({
                success: false,
                message: 'Veuillez remplir tous les champs.'
            });
            form.reset();
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
                                        <div className='header'>Nom*</div>
                                        <input name='name' type='text' placeholder='Votre nom' onChange={(e) => this.handleChange("name", e)} value={this.state.fields["name"] ? this.state.fields["name"] : ""} />
                                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='field'>
                                        <div className='header'>Nom de la société</div>
                                        <input name='company' type='text' placeholder='Nom de votre société' onChange={(e) => this.handleChange("companyName", e)} value={this.state.fields["companyName"] ? this.state.fields["companyName"] : ""} />
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='header'>Email*</div>
                                    <input name='email' type='text' placeholder='Votre adresse email' onChange={(e) => this.handleChange("email", e)} value={this.state.fields["email"] ? this.state.fields["email"] : ""} />
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            </div>
                            <div className='field'>
                                <div className='header'>Message*</div>
                                <textarea name='message' placeholder='Votre message' onChange={(e) => this.handleChange("message", e)} value={this.state.fields["message"] ? this.state.fields["message"] : ""} />
                                <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                            </div>
                        </form>
                        <Button loading={loading} call={() => this.sendEmail()} text='Envoyer' />
                        {message ? <p className={success ? 'message positive' : 'message negative'}>{message}</p>: null}
                    </div>
                </div>
            </section>
        );
    }
}
