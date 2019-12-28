import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const blackout = '/static/7537bd8e58a534386f44b697c0356774/c7de9/blackout-icon-512x512.webp'
const sendy = '/static/df59ac0f7984c20196bb2a4f529e0de9/c7de9/sendy-elements-icon-512x512.webp'
const mooElements = '/static/9a5c18a9b53f3cd1068e1278360a03d5/c7de9/moo-elements-icon-512x512.webp'

const plugins = (props) => (
    <Layout>
        <Helmet>
            <title>Plugins de WordPress</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={"Plugins para WordPress"} description={"Hechos para facilitarte la vida sin sacrificar el performance de tu sitio web."}/>

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