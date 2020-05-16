import PropTypes from 'prop-types'
import React from 'react'

const Button = props => (
    <div id="theme" style={props.timeout ? { display: 'none' } : {}}>
   theme
                        <h1>concreteblock</h1>
            <p className="theme-text">街は発見に満ちています． 街は観察をすることで奥行きを持ち，私たちの日常を異化してくれることもあります． なんてこともないものたちの集積≒街 ここではそんななんてこともないものたちの中から「コンクリートブロック」に着目して収集していきます．</p>
            <button onClick={() => { props.onOpenArticle('theme-about') }}>detail</button>
        </div>
)

Button.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout2:PropTypes.bool,
}

export default Button
