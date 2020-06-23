import React from 'react';
import Meter from './Meter.js';

class AboutAnim extends React.Component {
    constructor(props) {
        super(props)
        this.transitionEnd = this.transitionEnd.bind(this)
        this.mountStyle = this.mountStyle.bind(this)
        this.unMountStyle = this.unMountStyle.bind(this)
        this.state = {
            show: true,
            begin: 0,
            end: 1000,
            style: {
                width: '100%',
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
                width: '0%',
                opacity: 0,
                transition: 'all 1s ease'
            }
        })
    }

    mountStyle() {
        this.setState({
            style: {
                width: '100%',
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10);
        document.addEventListener('scroll', () => {
            const pos = window.scrollY;
            const percentage = (((pos - this.state.begin) / (this.state.end - this.state.begin)) * 100) + 2;
            this.setState({
                width: percentage.toString() + '%',
                opacity: 1,
                transition: 'all 2s ease'
            })
        });
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
            <div className='aboutanim-main' style={this.state.style}>
                <div className='upper'>
                    <div className='letter'>
                        A
                    </div>
                    <div className='letter'>
                        B
                    </div>
                    <div className='letter'>
                        O
                    </div>
                    <div className='letter'>
                        U
                    </div>
                    <div className='letter'>
                        T 
                    </div>
                    <div className='block'></div>
                </div>
                <div className='lower'>
                    <div className='block'></div>
                    <div className='letter'>
                        A
                    </div>
                    <div className='letter'>
                        B
                    </div>
                    <div className='letter'>
                        O
                    </div>
                    <div className='letter'>
                        U
                    </div>
                    <div className='letter'>
                        T
                    </div>
                </div>
                <Meter begin={0} end={1000}/>
            </div>
        )
    }
}

export default AboutAnim;