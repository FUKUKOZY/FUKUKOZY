import PropTypes from 'prop-types'
import React from 'react'

class ProfileAbout extends React.Component {
    render() {
        let close = (
            < div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            ></div>
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="profile-title"
                style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
            >
                <article
                    id="profile-about"
                    className={`${this.props.article === 'profile-about' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="Major">ほげほげ</h2>
                    <h3>ほげほげ職</h3>
                    <p>こんなことをしてきた
                        </p>
                    {close}
                </article>
            </div>

        )

    }
}

ProfileAbout.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout3: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout3: PropTypes.bool,
    setWrapperRef3: PropTypes.func.isRequired,
}

export default ProfileAbout