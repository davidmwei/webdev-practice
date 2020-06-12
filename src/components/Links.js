import React from 'react';

import link from '../assets/images/link.png';

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
                <div className='links-container'>
                    <a href='https://github.com/davidmwei'>Github</a>
                    <img src={link} class='link-logo' />
                </div>
                <div className='links-container'>
                    <a href='https://www.linkedin.com/in/davidmwei/'>LinkedIn</a>
                    <img src={link} class='link-logo' />
                </div>
                <div className='links-container'>
                    <a href='../resume.pdf' target='_blank'>Resume</a>
                    <img src={link} class='link-logo' />
                </div>
                <div className='links-container'>
                    <a href='mailto:davidwei@berkeley.edu?subject=hello!'>Email</a>
                    <img src={link} class='link-logo' />
                </div>
            </div>
        )
    }
}

 export default Links;