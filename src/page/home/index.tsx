import React from 'react';
import BaseComponent from '../../components/base-component';
import Intro from '../intro';
import './index.scss'

interface HomeProps {

}

interface HomeState {
    topBarView: null | Boolean
}

class HomeComponent extends BaseComponent<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            topBarView: null
        }
    }

    componentWillMount() {
    }

    onTopBarIcon() {
        this.setState({ topBarView: this.state.topBarView == false || this.state.topBarView == null ? true : false })
    }

    onContact(contact: String) {
        switch (contact) {
            case "qq": {
                break;
            }
            case "wechat": {
                break;
            }
            case "github": {
                window.open("https://github.com/liuyuqin1991");
                break;
            }
            case "csdn": {
                window.open("https://blog.csdn.net/liuyuqin1991");
                break;
            }
            case "youku": {
                window.open("");
                break;
            }
        }
    }

    render() {
        return (
            <div className="home">
                <header className="header">
                    <div className="top-bar">
                        <div className="top-bar-icon" onClick={this.onTopBarIcon.bind(this)}>
                            <div className="top-bar-line"></div>
                        </div>
                        <div className="top-bar-label">导航</div>
                        <nav className={this.classNames({
                            "main-nav": true,
                            "main-nav-hide": this.state.topBarView == false,
                            "main-nav-show": this.state.topBarView == true
                        })}>
                            <ul>
                                <li key="nav-0" className="nav-item">首页</li>
                                <li key="nav-1" className="nav-item">博客</li>
                                <li key="nav-2" className="nav-item">博客</li>
                                <li key="nav-3" className="nav-item">博客</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Intro />
                <footer className="footer">
                    <ul className="contact">
                        <li key="contact-qq" className="contact-icon qq" onClick={this.onContact.bind(this, "qq")}></li>
                        <li key="contact-wechat" className="contact-icon wechat" onClick={this.onContact.bind(this, "wechat")}></li>
                        <li key="contact-github" className="contact-icon github" onClick={this.onContact.bind(this, "github")}></li>
                        <li key="contact-csdn" className="contact-icon csdn" onClick={this.onContact.bind(this, "csdn")}></li>
                        <li key="contact-youku" className="contact-icon youku" onClick={this.onContact.bind(this, "youku")}></li>
                    </ul>
                </footer>
            </div>
        );
    }
}

export default HomeComponent;