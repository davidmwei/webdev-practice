import React from 'react';
import ProjFrame from './components/ProjFrame.js';
import NavBar from './components/NavBar.js';

import Goodly from './assets/images/goodly_logo.png';
import AI from './assets/images/cs61bl.png';


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
                            pic={AI}
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame1} />
        } else if (this.state.showFrame2) {
            display = <ProjFrame begin={1000} end={2000} 
                            line1={'CS61BL Summer 2020 - Academic Intern'}
                            line2={'I am currently an academic intern for CS61BL (Data Structures), where I assist TAs in running labs.'}
                            line3={"Here is CS61BL's website!"}
                            linkable={true}
                            link='https://cs61bl.org/su20/'
                            pic={Goodly}
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame2} />
        } else {
            display = <ProjFrame begin={2000} end={3000} 
                            line1={'cs-degree-tracker'}
                            line2={'Using React, I built a webapp designed to help CS majors at Berkeley plan their courses in order to fulfill the degree.'}
                            line3={'See github (work in progress)'}
                            linkable={true}
                            link='https://www.github.com/davidmwei/cs-degree-tracker'
                            onTransitionEnd={this.transitionEnd}
                            mounted={this.state.showFrame3} />
        }

        return (
            <div className='work-main'>
                <NavBar left='projects & experience' right1='/about' right1name='about' right2='/' right2name='home' />
                {display}
            </div>
        )
    }
}

export default Work;