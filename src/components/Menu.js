import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Blog</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/plugins">Plugins</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/portfolio">Portfolio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/github">Github</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sobre-mi">Sobre Mi</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">¡Hablemos!</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
