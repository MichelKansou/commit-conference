import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            selectedOption: 'option1'
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    afterOpenModal() {

    }
    handleOptionChange (e) {
      this.setState({
        selectedOption: e.target.value
      });
    }

    render() {
        const registerLink = this.state.selectedOption == 'option1' ? 'https://www.eventbrite.fr/e/billets-commit-event-journee-1-39958547090' : this.state.selectedOption == 'option2' ? 'https://www.eventbrite.fr/e/billets-commit-event-journee-2-40707693808' : 'https://www.eventbrite.fr/e/billets-commit-event-journee-1-39958547090'
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
                        <button className='btn' onClick={this.openModal}>Inscrivez vous !</button>
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
                            <button className='btn-close' onClick={this.closeModal}>Fermer<i className="fa fa-times-circle" aria-hidden="true"></i></button>
                            <h2 className='title'>Inscription</h2>
                            <p className='description'>Choisissez votre jour</p>
                            <form>
                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                            value="option1"
                                            checked={this.state.selectedOption === 'option1'}
                                            onChange={this.handleOptionChange.bind(this)} />
                                        <span className="checkmark"></span>
                                        25 Janvier 2018
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                            value="option2"
                                            checked={this.state.selectedOption === 'option2'}
                                            onChange={this.handleOptionChange.bind(this)} />
                                        <span className="checkmark"></span>
                                        26 Janvier 2018
                                    </label>
                                </div>
                            </form>
                            <a className="btn light" target="_blank" rel='noopener noreferrer' href={registerLink}>Valider</a>
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}
