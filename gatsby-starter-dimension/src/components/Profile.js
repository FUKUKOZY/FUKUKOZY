import PropTypes from 'prop-types'
import React from 'react'
import pic04 from '../images/01.jpg'

const Profile = props => (
    <div id="profile" style={props.timeout ? { display: 'none' } : {}}>
        <span className="image main">
            <img src={pic04} alt=""/>
        </span>
        <p className="profile-text">ほげほげ</p>
        <button onClick={() => { props.onOpenArticle('profile-about') }}>詳細</button>
    </div>
)

Profile.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout3: PropTypes.bool,
}

export default Profile
