import React, { Component } from 'react';

export default class Plan extends Component {
    render() {
        return (
            <section id='plan'>
                <div className='container'>
                    <h2 className='title'>Planning</h2>
                    <div className='grid'>
                        <h4 className='date'>25 Janvier 2018</h4>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Isomorphic JavaScript' src="./images/subjects logo/logo-JS.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Isomorphic JavaScript</h3>
                                            <h4 className='subject-description'>En quoi le JavaScript isomorphe permet d'harmoniser le système d'information afin de répondre à une demande croissante de performance ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/quentin-hu-951841ab/'>HU Quentin</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/benjamin-laude-11a953b0/'>LAUDE Benjamin</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 8h30 - 9h30</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Internet Of Things' src="./images/subjects logo/logo-iot.png"/>
                                        </div>
                                        <div className='column'>
                                            <h3 className='subject-title'>Internet Of Things</h3>
                                            <h4 className='subject-description'>Comment utiliser l'IoT sans compromettre la sécurité du SI ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/rapha%C3%ABl-damblin-43728268/'>DAMBLIN Raphael</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/baptiste-gruson-194694108/'>GRUSON Baptiste</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 9h45 - 10h45</h5>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Blockchain et DApps' src="./images/subjects logo/logo-ethereum.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Blockchain et DApps</h3>
                                            <h4 className='subject-description'>Comment la blockchain va révolutionner la manière dont on conçoit les applications web grâce aux DApps?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/michel-kansou-4384a38a/'>KANSOU Michel</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/simon-raison-9177b2138/'>RAISON Simon</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 11h00 - 12h00</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Reactive System' src='./images/subjects logo/logo-reactive.png'/>
                                        </div>
                                        <div className='column'>
                                            <h3 className='subject-title'>Reactive System</h3>
                                            <h4 className='subject-description'>Améliorez la disponibilité de votre application avec Spring et les systèmes réactifs</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/florian-bellotti-80783bab/'>BELLOTTI Florian</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 13h30 - 14h30</h5>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Mixed Reality' src="./images/subjects logo/logo-mixed-reality.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Mixed Reality</h3>
                                            <h4 className='subject-description'>La Mixed Reality marque-t-elle une nouvelle ère du numérique ? (Cas d'étude MS HoloLens, effets sur la productivité, possibilités d'évolutions)</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/louis-debavelaere-aa9694b1/'>DEBAVELAERE Louis</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/axel-maciejewski-6a6530107/'>MACIEJEWSKI Axel</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 15h15 - 16h15</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Compétitivité des entreprises' src="./images/subjects logo/logo-competitive.png"/>
                                        </div>
                                        <div className='column'>
                                            <h3 className='subject-title'>Compétitivité des entreprises</h3>
                                            <h4 className='subject-description'>Comment moderniser son système d’information, dans le web, efficacement dans l’ère du temps tout en restant compétitif ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/maxime-filipiak-20a558123/'>FILIPIAK Maxime</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/r%C3%A9my-labitte-1bb02bb2/'>LABITTE Rémy</a></h5>
                                            {
                                                <h5 className='subject-date'>25 janvier 2018, 16h30 - 17h30</h5>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className='date'>26 Janvier 2018</h4>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Web sémantique' src="./images/subjects logo/logo-web-semantic.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Web sémantique</h3>
                                            <h4 className='subject-description'>En quoi le web sémantique permet de donner du sens aux données ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/sfardel/'>FARDEL Simon</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/hyacintheknobloch/'>KNOBLOCH Hyacinthe</a></h5>
                                            {
                                                <h5 className='subject-date'>26 janvier 2018, 8h30 - 9h30</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Impression 3D' src="./images/subjects logo/logo-3d-printer.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Impression 3D</h3>
                                            <h4 className='subject-description'>L'impression 3D sera-t-elle la chaîne de production de demain ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/quentin-perthuis/'>PERTHUIS Quentin</a></h5>
                                            {
                                                <h5 className='subject-date'>26 janvier 2018, 9h45 - 10h45</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Ordinateurs quantiques' src='./images/subjects logo/logo-quantum.png'/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Ordinateurs quantiques</h3>
                                            <h4 className='subject-description'>Comment assurer la pérennité des données après l'apparition des ordinateurs quantiques pour les entreprises françaises ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/alexandrebarelle/'>BARELLE Alexandre</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/thibaut-chieux-7bb63293/'>CHIEUX Thibaut</a></h5>
                                            {
                                                <h5 className='subject-date'>26 janvier 2018, 11h00 - 12h00</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Évolution des matériels du SI' src="./images/subjects logo/logo-evolution-si.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Évolution des matériels du SI</h3>
                                            <h4 className='subject-description'>Quand renouveler le matériel du SI pour avoir le meilleur rapport coût/efficacité/eco-TIC ?</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/julien-gerard-fr/'>GERARD Julien</a></h5>
                                            {
                                                <h5 className='subject-date'>26 janvier 2018, 13h30 - 14h30</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='image-container'>
                                            <img className='subject-logo' alt='Commit - Le Lifi' src="./images/subjects logo/logo-lifi.png"/>
                                        </div>
                                    <div className='column'>
                                            <h3 className='subject-title'>Le Lifi</h3>
                                            <h4 className='subject-description'>En quoi le LiFi sera un complément, corrigeant les défauts du WiFi concernant les SI en entreprises.</h4>
                                            <h5 className='subject-speaker'>Par : <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/fran%C3%A7ois-verdet-414530150/'>VERDET François</a>, <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/jules-van-besien-7337b5114/'>VANBESIEN Jules</a></h5>
                                            {
                                                <h5 className='subject-date'>26 janvier 2018, 14h45 - 15h45</h5>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
