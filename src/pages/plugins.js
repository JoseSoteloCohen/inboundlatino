import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import blackout from '../images/blackout-icon-512x512.png'
import mooElements from '../images/moo-elements-icon-512x512.png'
import sendy from '../images/sendy-elements-icon-512x512.png'

const plugins = (props) => (
    <Layout>
        <Helmet>
            <title>Plugins de WordPress hechos por José Sotelo</title>
            <meta name="description" content="Plugins de WordPress que cuentan con integraciones entre Elementor Pro, Sendy y Moosend. Además, un widget que le permite a tus usuarios activar modo oscuro en tu sitio web" />
        </Helmet>

        <BannerLanding title={"Plugins para WordPress"} description={"Hechos para facilitarte la vida sin sacrificar el performance de tu sitio web." } style={"style2"}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>¿Tienes ideas para mejorarlos?</h2>
                    </header>
                    <p>Siempre estoy abierto a consejos para nuevas características que puedan hacer de mis plugins algo más útil para tí y tu negocio.<br />Además, me ayudarías muchísimo si estás teniendo problemas con alguno y te tomas 5 segundos para darme tu feedback o notificarme sobre algún bug.</p>
                    <ul className="actions">
                        <li><Link to="/generic" className="button">Contáctame</Link></li>
                    </ul>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={blackout} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Blackout: Widget de Modo Oscuro</h3>
                            </header>
                            <p>Crea un widget que le permite a tus usuarios activar / desactivar el modo oscuro en tu sitio web.</p>
                            <ul className="actions">
                                <li><Link to="/blackout" className="button">Conocer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={sendy} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sendy Elements</h3>
                            </header>
                            <p>Integración entre el widget de formulario de Elementor Pro y Sendy.</p>
                            <ul className="actions">
                                <li><Link to="/sendy-elements" className="button">Conocer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={mooElements} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Moo Elements</h3>
                            </header>
                            <p>Integración entre el widget de formulario de Elementor Pro y Moosend.</p>
                            <ul className="actions">
                                <li><Link to="/moo-elements" className="button">Conocer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default plugins