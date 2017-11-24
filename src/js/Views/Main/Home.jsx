import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        // <button className='btn' onClick={this.openModal}>Inscrivez vous !</button>
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
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        shouldCloseOnOverlayClick={true}
                        className={{
                            base: 'custom-modal'
                        }}
                        contentLabel="Example Modal"
                        >
                        <div className='container'>
                            <i className="fa fa-times-circle" aria-hidden="true" onClick={this.closeModal}></i>
                            <h2 className='title'>Inscription</h2>
                            <p className='description'>Choisissez votre jour</p>
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}
