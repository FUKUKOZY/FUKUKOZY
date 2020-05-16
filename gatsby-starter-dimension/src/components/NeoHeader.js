import React from 'react'
import PropTypes from 'prop-types'

const NeoHeader = (props) => (
    <header id="neoheader">
        <ul>
            <li className="site-title">FUKUKOZY</li>
            <li><a href="https://testwebsite-b89ba.web.app/page-2/">Intro</a></li>
            <li><a href="https://testwebsite-b89ba.web.app/page-2/">Work</a></li>
            <li><a href="https://testwebsite-b89ba.web.app/page-2/">about</a></li>
            </ul>
    </header>
)

NeoHeader.propTypes = {
    timeout: PropTypes.bool
}

export default NeoHeader