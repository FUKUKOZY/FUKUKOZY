import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Button from '../components/Button'
import About from '../components/About'
import Profile from '../components/Profile'
import ProfileAbout from '../components/ProfileAbout'
import NeoHeader from '../components/NeoHeader'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isArticleVisible: false,
        isArticleVisible2: false,
        isArticleVisible3: false,
        timeout: false,
        timeout2: false,
      timeout3: false,
        articleTimeout: false,
        articleTimeout2: false,
      articleTimeout3:false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this)
      this.handleOpenArticle2 = this.handleOpenArticle2.bind(this)
      this.handleCloseArticle2 = this.handleCloseArticle2.bind(this)
      this.setWrapperRef2 = this.setWrapperRef2.bind(this)
      this.handleClickOutside2 = this.handleClickOutside2.bind(this)
      this.handleOpenArticle3 = this.handleOpenArticle3.bind(this)
      this.handleCloseArticle3 = this.handleCloseArticle3.bind(this)
      this.setWrapperRef3 = this.setWrapperRef3.bind(this)
      this.handleClickOutside3 = this.handleClickOutside3.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
    }

    componentDidMount2() {
        this.timeoutId2 = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
        document.addEventListener('mousedown', this.handleClickOutside2);
    }

    componentWillUnmount2() {
        if (this.timeoutId2) {
            clearTimeout(this.timeoutId2);
        }
        document.removeEventListener('mousedown', this.handleClickOutside2);
    }

    setWrapperRef2(node) {
        this.wrapperRef2 = node;
    }

    handleOpenArticle2(article) {

        this.setState({
            isArticleVisible2: !this.state.isArticleVisible2,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout2: !this.state.timeout2
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout2: !this.state.articleTimeout2
            })
        }, 350)

    }

    handleCloseArticle2() {

        this.setState({
            articleTimeout2: !this.state.articleTimeout2
        })

        setTimeout(() => {
            this.setState({
                timeout2: !this.state.timeout2
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible2: !this.state.isArticleVisible2,
                article: ''
            })
        }, 350)

    }

    handleClickOutside2(event) {
        if (this.wrapperRef2 && !this.wrapperRef2.contains(event.target)) {
            if (this.state.isArticleVisible2) {
                this.handleCloseArticle2();
            }
        }
    }

    componentDidMount3() {
        this.timeoutId3 = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
        document.addEventListener('mousedown', this.handleClickOutside3);
    }

    componentWillUnmount3() {
        if (this.timeoutId3) {
            clearTimeout(this.timeoutId3);
        }
        document.removeEventListener('mousedown', this.handleClickOutside3);
    }

    setWrapperRef3(node) {
        this.wrapperRef3 = node;
    }

    handleOpenArticle3(article) {

        this.setState({
            isArticleVisible3: !this.state.isArticleVisible3,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout3: !this.state.timeout3
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout3: !this.state.articleTimeout3
            })
        }, 350)

    }

    handleCloseArticle3() {

        this.setState({
            articleTimeout3: !this.state.articleTimeout3
        })

        setTimeout(() => {
            this.setState({
                timeout3: !this.state.timeout3
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible3: !this.state.isArticleVisible3,
                article: ''
            })
        }, 350)

    }

    handleClickOutside3(event) {
        if (this.wrapperRef3 && !this.wrapperRef3.contains(event.target)) {
            if (this.state.isArticleVisible3) {
                this.handleCloseArticle3();
            }
        }
    }

  render() {
    return (
        <Layout location={this.props.location}>
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
                <NeoHeader />
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
                </div>
                <div id="wrapper2" className={`wrapper2 ${this.state.loading} ${this.state.isArticleVisible2 ? 'is-article-visible' : ''}`}>
                   
                    <Button onOpenArticle={this.handleOpenArticle2} timeout={this.state.timeout2} />
                        <About
                            isArticleVisible={this.state.isArticleVisible2}
                            timeout={this.state.timeout2}
                            articleTimeout={this.state.articleTimeout2}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle2}
                        setWrapperRef={this.setWrapperRef2}
                        />
                        <div className="twitter"><a class="twitter-timeline" href="https://twitter.com/hukukozy?ref_src=twsrc%5Etfw">Tweets by hukukozy</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
                </div>
                <div id="wrapper3" className={`wrapper3 ${this.state.loading} ${this.state.isArticleVisible3 ? 'is-article-visible' : ''}`}>
                    <div className="profile-box">
                    <Profile onOpenArticle={this.handleOpenArticle3} timeout={this.state.timeout3} />
                    <Profile onOpenArticle={this.handleOpenArticle3} timeout={this.state.timeout3} />
                    <Profile onOpenArticle={this.handleOpenArticle3} timeout={this.state.timeout3} />
                    <Profile onOpenArticle={this.handleOpenArticle3} timeout={this.state.timeout3} />
                        <Profile onOpenArticle={this.handleOpenArticle3} timeout={this.state.timeout3} />
                    <ProfileAbout
                        isArticleVisible={this.state.isArticleVisible3}
                        timeout={this.state.timeout3}
                        articleTimeout={this.state.articleTimeout3}
                        article={this.state.article}
                        onCloseArticle={this.handleCloseArticle3}
                        setWrapperRef={this.setWrapperRef3}
                        />
                    </div>
                </div>
                <div id="wrapper4">
                    </div>
                <div id="wrapper-footer">
                    <Footer timeout={this.state.timeout} />
                </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
