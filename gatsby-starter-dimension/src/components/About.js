import PropTypes from 'prop-types'
import React from 'react'

class About extends React.Component {
    render() {
        let close = (
            < div
        className = "close"
        onClick = {()=> {
            this.props.onCloseArticle()
                }}
            ></div>
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="theme-title"
                style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
            >
                <article
                    id="theme-about"
                    className={`${this.props.article === 'theme-about' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="Major">コンクリートブロックについて</h2>
                    <h3>なぜコンクリート（透かし）ブロックは存在しているのか？</h3>
                    <p>なぜこのように多くの種類のコンクリート（透かし）ブロックがあるのだろうか．
                        透かしブロックコンクリート（透かし）ブロックを設ける意味は，通風のためらしい．しかし，そうであるならば装飾的にするのはなぜなのだろうか？例えば，最も見られる三つ葉のような形の透かしブロックは「青海波」と呼ばれ，日本古来から縁起のいいものとされている形らしい．しかし，その青海波の形の中にも溝をつけたり，太さを変えたりと無数のバリエーションが存在している．その種類の多さがなんなのかは非常に気になる．
                        そもそもコンクリート（透かし）ブロックとはどのようにつくるのだろうか？型枠でつくるのだとしたら，バリエーションの多さは大変な手間をかけているということになる．つまり，それだけの手間をかけるだけの理由が存在しているはずだ，ということも言えるだろう．その理由も探っていきたい．
                        </p>
                    <h3>コンクリート（透かし）ブロックは「近代化」と共に歩んできた？</h3>
                    <p>さらに言えば，そもそもコンクリート（透かし）ブロックという存在は「近代化」と共に歩んできたはずだ．なぜならコンクリートブロック塀という存在自体が各々の家の敷地の所有エリアを占めすものである．つまりコンクリートブロック塀は町家のようにそれぞれの家が壁を共有していた時代から，それぞれの家が近代家族化され，所有という概念が強化されたという象徴と言えるはずだからだ．
                    そう考えるならば，コンクリート（透かし）ブロックを追うということは近代をニッチな視点から見るということになり，より精彩な近代化を考えるにあたっての一つの材料となるだろう．
                        そんなことを頭の隅の隅に置きつつも，コンクリート（透かし）ブロックを収集する街歩きを楽しもうと思う．
                        </p>
                    {close}
                </article>
            </div>

        )

    }
}

About.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout2: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout2: PropTypes.bool,
    setWrapperRef2:PropTypes.func.isRequired,
}

export default About