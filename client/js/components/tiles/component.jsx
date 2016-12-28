import React, {PropTypes} from 'react';



export const Blocks = (props) => {
    return (
        <div className='alphabet-list'>
            {props.children}
        </div>
    );
};



Blocks.propTypes = {
    children: PropTypes.object.isRequired
};
