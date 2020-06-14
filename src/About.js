import React from 'react';
import Info from './components/Info.js';
import CalHacks from './components/CalHacks.js';
import AboutAnim from './components/AboutAnim';

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAbout: true,
            showInfo: false,
            showCalHacks: false,
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const pos = window.scrollY;
            if (pos > 1000 && pos < 2000) {
                this.setState({
                    showAbout: false,
                    showInfo: true,
                    showCalHacks: false,
                })
            } else if (pos > 2000) {
                this.setState({
                    showAbout: false,
                    showInfo: false,
                    showCalHacks: true,
                })
            } else {
                this.setState({
                    showAbout: true,
                    showInfo: false,
                    showCalHacks: false,
                })
            }
        })
    }

    render() {
        let shownComponent;
        if (this.state.showAbout) {
            shownComponent = <div></div>
        } else if (this.state.showInfo) {
            shownComponent = <Info onTransitionEnd={this.transitionEnd} mounted={this.state.showInfo} />
        } else if (this.state.showCalHacks) {
            shownComponent = <CalHacks onTransitionEnd={this.transitionEnd} mounted={this.state.showCalHacks} />
        }

        return (
            <div className='about-main'>
                {shownComponent}
            </div>
        )
    }
}

export default About;