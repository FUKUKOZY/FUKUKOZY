import React from 'react'
import { Link } from 'gatsby'
import Proptypes from 'prop-types'

import Layout from '../components/layout'
import NeoHeader from '../components/NeoHeader'

class SecondPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            loading: 'is-loading'
        }
    }


    render() {
        return (
            <Layout location={this.props.location} >
                <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
                    <NeoHeader />
                    <div id="wrapper">
                        <h1>Hi from the second page</h1>
                        <p>Welcome to page 2</p>
                        <Link to="/">Go back to the homepage</Link>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default SecondPage
