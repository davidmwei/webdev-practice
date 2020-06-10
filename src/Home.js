import React from 'react';
import Meter from './components/Meter.js';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 1
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const pos = window.scrollY;
            if (pos > 1000) {
                this.setState({
                    display: 2
                })
            } else {
                this.setState({
                    display: 1
                })
            }
        });
    }

    render() {
        let shownComponent;

        if (this.state.display === 1) {
            shownComponent = <Welcome />
        } else {
            shownComponent = <Links />
        }

        return (
            shownComponent
        );
    }
};

class Welcome extends React.Component {
    render() {
        return (
            <div className='home-main'>
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
    render() {
        return (
            <div className='links'>
                <a href='https://github.com/davidmwei'>Github</a>
                <a href='https://www.linkedin.com/in/davidmwei/'>LinkedIn</a>
                <a href='../resume.pdf' target='_blank'>Resume</a>
                <a href='mailto:davidwei@berkeley.edu?subject=hello!'>Email</a>
            </div>
        )
    }
}

export default Home;