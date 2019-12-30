import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import garagebeer from '../images/garagebeer-iso-portfolio.jpg'
import napoleon from '../images/consultora-napoleon-portfolio.png'
import cosas from '../images/cosas-de-anas-portfolio.png'

const Landing = (props) => (
  <Layout>
      <Helmet>
          <title>Sitios web desarrollados en WordPress y Elementor</title>
          <meta name="description" content="Entra ahora y conoce todos los sitios web e e-commerce que he hecho utilizando WordPress y Elementor" />
      </Helmet>

      <BannerLanding title="Sitios web desarrollados por mi" description="Todos son hechos en WordPress utilizando Elementor" style={"style3"} />

      <div id="main">
              <div className="inner">
                  <div className="grid-wrapper">
                    <article className="col-4">
                      <img alt="Garagebeer: e-Commerce para una cervecería de Barcelona" src={garagebeer} className="image fit"/>
                      <h3 className="align-center"><a target="_blank"  rel="noopener nofollow noreferrer" href="https://www.garagebeer.co/">Garagebeer</a></h3>
                      <p className="align-center">e-Commerce para una cervecería de Barcelona.</p>
                    </article>
                    <article className="col-4">
                      <img src={napoleon} className="image fit" alt="Napoleon: Sitio web para una consultora de Buenos Aires."/>
                      <h3 className="align-center"><a target="_blank"  rel="noopener nofollow noreferrer" href="http://consultoranapoleon.com/">Napoleon</a></h3>
                      <p className="align-center">Sitio web para una consultora de Buenos Aires.</p>
                    </article>
                    <article className="col-4">
                      <img src={cosas} className="image fit" alt="Cosas de Anas: Blog personal para una Paulista"/>
                      <h3 className="align-center"><a target="_blank"  rel="noopener nofollow noreferrer" href="https://cosasdeanas.com/">Cosas de Anas</a></h3>
                      <p className="align-center">Blog personal para una Paulista.</p>
                    </article>
                  </div>
              </div>
      </div>

  </Layout>
)

export default Landing