import React, {PropTypes} from 'react';



export const Header = (props) => {
    console.log('header');
    console.log(props.children);
    return (
        <div className='cnn-hangman__app--header flex'>
            <h1> CNN Hangman </h1>
            {props.children}
        </div>
    );
};



Header.propTypes = {
    children: PropTypes.object
};
