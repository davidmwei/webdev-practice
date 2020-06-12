import React from 'react';
import Welcome from './components/Welcome.js';
import Links from './components/Links.js';

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

export default Home;