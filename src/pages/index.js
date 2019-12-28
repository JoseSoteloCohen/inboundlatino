import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../images/blog-marketing-digital-desarrollo.jpeg'
import pic02 from '../images/plugins-wordpress.jpg'
import pic03 from '../images/desarrollo-web.jpeg'
import pic04 from '../images/octocat-github.jpeg'
import pic05 from '../images/linkedin-jose-sotelo.jpeg'
import pic06 from '../images/cartagena-sobre-mi.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Blog de Marketing Digital y Desarrollo web | Inbound Latino"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>Cosas que creo que te podrían interesar</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Plugins</h3>
                                <p>Plugins para WordPress</p>
                            </header>
                            <Link to="/plugins" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Portfolio - Desarrollo Web</h3>
                                <p>Portfolio con sitios que he hecho para otros emprendedores como tu y yo</p>
                            </header>
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Github</h3>
                                <p>Feed con datos de mi Github</p>
                            </header>
                            <Link to="/github" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>LinkedIn</h3>
                                <p>¡Conectemos!</p>
                            </header>
                            <a target="_blank" rel="noopener nofollow noreferrer" href="https://www.linkedin.com/in/jsotelocohen/" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Sobre mi</h3>
                                <p>¿Quieres saber más sobre mi? Este es el lugar</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>¿Te interesa trabajar conmigo?</h2>
                            </header>
                            <p>Cliquea abajo y mándame un mensaje</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">¡Contáctame!</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex