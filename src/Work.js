import React from 'react';
import ProjFrame from './components/ProjFrame.js';


class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFrame1: true,
            showFrame2: false,
            showFrame3: false,
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const pos = window.scrollY;
            if (pos > 1000 && pos < 2000) {
                this.setState({
                    showFrame1: false,
                    showFrame2: true,
                    showFrame3: false
                })
            } else if (pos > 2000) {
                this.setState({
                    showFrame1: false,
                    showFrame2: false,
                    showFrame3: true
                })
            } else {
                this.setState({
                    showFrame1: true,
                    showFrame2: false,
                    showFrame3: false
                })
            }
        })
    }

    render() {

        let display;

        if (this.state.showFrame1) {
            display = <ProjFrame begin={0} end={1000} 
                            line1={'Goodly Labs - Public Editor'}
                            line2={'As a SWE for Public Editor, I write and maintain code which highlights misinformation on select articles.'}
                            line3={'Check out Public Editor!'}
                            linkable={true}
                            link='https://www.publiceditor.io'
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame1} />
        } else if (this.state.showFrame2) {
            display = <ProjFrame begin={1000} end={2000} 
                            line1={'cs-degree-tracker'}
                            line2={'Using React, I built a webapp designed to help CS majors at Berkeley plan their courses in order to fulfill the degree.'}
                            line3={'See github (work in progress)'}
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame2} />
        } else {
            display = <ProjFrame begin={2000} end={3000} 
                            line1={'gitlet'}
                            line2={'As the final project for CS61B, I built a mini version-control system in Java.'}
                            line3={'Request more info'}
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame3} />
        }

        return (
            <div className='work-main'>
                <div className='navbar'>
                    navbar here
                </div>
                {display}
            </div>
        )
    }
}

export default Work;