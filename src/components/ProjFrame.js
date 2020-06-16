import React from 'react';
import Meter from './Meter.js';

class ProjFrame extends React.Component {
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
            <div className='display-frame-main' style={this.state.style} onTransitionEnd={this.transitionEnd}>
                <div className='content-main'>
                    <div className='content-text'>
                        <div className='line'>
                            {this.props.line1}
                        </div>
                        <div className='line'>
                            {this.props.line2}
                        </div>
                        <div className='line'>
                            {!this.props.linkable && 
                                this.props.line3
                            }

                            {this.props.linkable && 
                                <a href={this.props.link} target='_blank'>{this.props.line3}</a>
                            }
                        </div>

                    </div>
                    <div className='pic'>
                        {this.props.pic}
                    </div>
                </div>
                <Meter begin={this.props.begin} end={this.props.end} />
            </div>
        )
    }
}

ProjFrame.defaultProps = {
    begin: 0,
    end: 1000,
    line1: 'line 1',
    line2: 'line 2',
    line3: 'line 3',
    linkable: false,
    link: '',
    pic: ''
}


export default ProjFrame;