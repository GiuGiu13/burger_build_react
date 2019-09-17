import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            {/* approch to change the height of the logo dynamically */}
            {/* <Logo height="11%"/> */}
            <div className={classes.Logo}>
                <Logo />
            </div>
           
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;