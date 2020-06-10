import React from 'react';

class Meter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '0%'
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const pos = window.scrollY;
            const percentage = (((pos - this.props.begin) / (this.props.end - this.props.begin)) * 100) + 2
            this.setState({
                width: percentage.toString() + '%'
            })
        });
    }

    render() {
        const fillStyle = {
            backgroundColor: 'white',
            width: this.state.width,
            height: 4
        }

        return (
            <div className='meter-main'>
                <div className='scroll-container'>
                    <div className='scroll-progress'>
                        <div className='scroll-progress-fill' style={fillStyle}>
                        </div>
                    </div>
                    <div className='bounce arrow'>v</div>
                </div>
            </div>
        )
    }
}

export default Meter;