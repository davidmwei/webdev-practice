import React from 'react';

import About from './About';
import Home from './Home';
import Work from './Work';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHome: true,
            showAbout: false,
            showWork: false,
            showFoot: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const pos = window.scrollY;
            if (pos < 1000) {
                this.setState({
                    showHome: true,
                    showAbout: false,
                    showWork: false,
                    showFoot: false
                })
            } else if (pos >= 1000 && pos < 2000) {
                this.setState({
                    showHome: false,
                    showAbout: true,
                    showWork: false,
                    showFoot: false
                })
            } else if (pos >= 2000) {
                this.setState({
                    showHome: false,
                    showAbout: false,
                    showWork: true,
                    showFoot: false
                })
            } 
        })
    }


    render() {
        let shownComponent;

        if (this.showHome) {
            shownComponent = <Home />
        } else if (this.showAbout) {
            shownComponent = <About />
        } else if (this.showWork) {
            shownComponent = <Work />
        } else if (this.showFoot) {
            shownComponent = <Links />
        }


        return (
            <div className='site-main'>
                {shownComponent}
            </div>
        )
    }
}

export default Main;