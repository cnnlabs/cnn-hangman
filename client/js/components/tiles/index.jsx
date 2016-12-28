import {connect} from 'react-redux';
import {Blocks} from './component';
import React, {PropTypes} from 'react';




const mapStateToProps = ({blocks}) => ({
    blocks
});



const Tiles = (props) => {
    return (
        <Blocks>
            <ul className='flex alphabet-list__blocks'>
                {props.blocks.map((item, i) =>
                    <li key={i} className='box alphabet-list__blocks--item'>
                        {item === null ? '\u00A0' : item}
                    </li>
                )}
            </ul>
        </Blocks>
    );
};



Tiles.propTypes = {
    blocks: PropTypes.array.isRequired
};



export default connect(mapStateToProps)(Tiles);
