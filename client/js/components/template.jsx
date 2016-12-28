import {Header} from './common/header';
import MissCounter from './player/miss/component';
import React, {PropTypes} from 'react';



export const Template = (props) => {
    return (
        <div id='container'>
            <Header>
                <MissCounter />
            </Header>
            <div className='wrapper'>
                {props.children}
            </div>
        </div>
    );
};



Template.propTypes = {
    children: PropTypes.array
};



export default Template;



