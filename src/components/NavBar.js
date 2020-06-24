import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='left'>
                    {this.props.left}
                </div>
                <div className='right'>
                    <div className='right-1'>
                        <NavLink to={this.props.right1} className='link-nav' activeClassName='link-nav-active' style={{ textDecoration: 'none', color: '#808080' }}>{this.props.right1name}</NavLink>
                    </div>
                    <div className='right-2'>
                        <NavLink to={this.props.right2} className='link-nav' activeClassName='link-nav-active' style={{ textDecoration: 'none', color: '#808080' }}>{this.props.right2name}</NavLink>
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