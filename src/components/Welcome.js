import React from 'react';
import Meter from './Meter.js'

import wave from '../assets/video/wave.mov';
import NavBar from './NavBar.js';

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
                <NavBar left='davidwei.me v2' right1='/work' right1name='work' right2='/about' right2name='about' />
                <div className='wave-container'>
                    <video className='wave-mov' playsInline autoPlay loop muted src={wave} />
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

export default Welcome;