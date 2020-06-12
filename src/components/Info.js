import React from 'react';
import Meter from './Meter';

import mypic from '../assets/images/mypic.JPG'

class Info extends React.Component {
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
            <div className='info-main' style={this.state.style} onTransitionEnd={this.transitionEnd}>
                <div className='about-logo'>
                    about logo here
                </div>
                <div className='info-container'>
                    <div className='info-text'>
                        Hello! I'm currently in my sophomore year at UC Berkeley, 
                        studying computer science 💻 and applied mathematics 📐.
                        <br />
                        <br />
                        Although i'm pursuing a STEM intensive degree, i've always 
                        valued interdiscplinary  education. In particular, I love 
                        solving problems, collaborating with other professional  
                        fields, and prioritizing people with my work. I try my 
                        best to be someone who is passionate and approachable.
                        <br />
                        <br />
                        Scroll below to see what else I'm up to!
                    </div>
                    <div className='my-pic-container'>
                        <img src={mypic} alt='my pic' id='my-pic' />
                    </div>
                </div>
                <Meter begin={1000} end={2000}/>
            </div>
        )
    }
}

export default Info;