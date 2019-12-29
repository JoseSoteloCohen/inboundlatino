import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NO ENCONTRADO</h1>
                <p>Acabas de entrar a una página o archivo que no existe.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
