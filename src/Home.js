import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Meter from './components/Meter.js';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcome: true,
            showLinks: false,
            display: 1
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const pos = window.scrollY;
            if (pos > 1000) {
                this.setState({
                    showWelcome: false,
                    showLinks: true,
                    display: 2
                })
            } else {
                this.setState({
                    showWelcome: true,
                    showLinks: false,
                    display: 1
                })
            }
        });
    }

    render() {
        let shownComponent;

        if (this.state.display === 1) {
            shownComponent = <Welcome onTransitionEnd={this.transitionEnd} mounted={this.state.showWelcome} />
        } else {
            shownComponent = <Links onTransitionEnd={this.transitionEnd} mounted={this.state.showLinks} />
        }

        return (
            this.state.showWelcome ? <Welcome onTransitionEnd={this.transitionEnd} mounted={this.state.showWelcome} /> : <Links onTransitionEnd={this.transitionEnd} mounted={this.state.showLinks} />
        );

    
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.transitionEnd = this.transitionEnd.bind(this)
        this.mountStyle = this.mountStyle.bind(this)
        this.unMountStyle = this.unMountStyle.bind(this)
        this.state = {
            show: true,
            style: {
                opacity: 0,
                transition: 'all 2s ease',
            }
        }
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.mounted) {
            return this.unMountStyle()
        }

        this.setState({
            show: true
        })
        setTimeout(this.mountStyle, 10)
    }

    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,
                transition: 'all 1s ease'
            }
        })
    }

    mountStyle() {
        this.setState({
            style: {
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10)
    }

    transitionEnd() {
        if (!this.props.mounted) {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return ( this.state.show && 
            <div className='home-main' style={this.state.style} onTransitionEnd={this.transitionEnd}>
                <div className='header'>
                    header
                </div>
                <div className='welcome'>
                👋 I’m David — a second year computer science student at UC Berkeley. I 
                like to explore new things and make people-oriented products. 
                </div>
                <Meter begin={0} end={1000} />
            </div>
        )
    }
}

class Links extends React.Component {
    constructor(props) {
        super(props)
        this.transitionEnd = this.transitionEnd.bind(this)
        this.mountStyle = this.mountStyle.bind(this)
        this.unMountStyle = this.unMountStyle.bind(this)
        this.state = {
            show: true,
            style: {
                opacity: 0,
                transition: 'all 2s ease',
            }
        }
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.mounted) {
            return this.unMountStyle()
        }

        this.setState({
            show: true
        })
        setTimeout(this.mountStyle, 10)
    }

    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,
                transition: 'all 5s ease'
            }
        })
    }

    mountStyle() {
        this.setState({
            style: {
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10)
    }

    transitionEnd() {
        if (!this.props.mounted) {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            <div className='links' style={this.state.style} onTransitionEnd={this.transitionEnd}>
                <a href='https://github.com/davidmwei'>Github</a>
                <a href='https://www.linkedin.com/in/davidmwei/'>LinkedIn</a>
                <a href='../resume.pdf' target='_blank'>Resume</a>
                <a href='mailto:davidwei@berkeley.edu?subject=hello!'>Email</a>
            </div>
        )
    }
}

export default Home;