import React from 'react';
import Meter from './Meter.js';

import calhackspic from '../assets/images/calhacks.JPG';

class CalHacks extends React.Component {
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
        return (
            <div className='calhacks-main' style={this.state.style} onTransitionEnd={this.transitionEnd}>
                <div className='about-logo'>
                    about logo here
                </div>
                <div className='calhacks-container'>
                    <div className='calhacks-pic-container'>
                        <img src={calhackspic} alt='calhacks pic' id='calhacks-pic' />
                    </div>
                    <div className='calhacks-text'>
                        <div className='title-container'>
                            <a href='calhacks.io' id='calhacks-title'>Cal Hacks</a>
                        </div>
                        I have had the privilege of working with Cal Hacks, the world's <span className='white-text'>largest 
                        collegiate hackathon</span> which is hosted annually at UC Berkeley, since Fall 
                        of 2019. For Cal Hacks 6.0, we saw <span className='white-text'>3000+ applicants and 2000+ attendees</span> hailing 
                        from all over the globe.
                        <br />
                        <br />
                        As the current <span className='white-text'>lead Finance director</span>, I create our annual budget and work 
                        closely with the sponsorship team to secure adequate funds to run our event. 
                    </div>
                </div>
                <Meter begin={2000} end={3000}/>
            </div>
        )
    }
}

export default CalHacks;