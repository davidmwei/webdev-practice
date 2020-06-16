import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='left'>
                    {this.props.left}
                </div>
                <div className='right'>
                    <div className='right-1'>
                        <Link to={this.props.right1}>{this.props.right1name}</Link>
                    </div>
                    <div className='right-2'>
                        <Link to={this.props.right2}>{this.props.right2name}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

NavBar.defaultProps = {
    left: 'davidwei.me v2',
    right1: '/',
    right1name: 'home',
    right2: '/about',
    right2name: 'about'
}

export default NavBar;