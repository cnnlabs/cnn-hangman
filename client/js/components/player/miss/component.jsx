import {connect} from 'react-redux';
import React, {PropTypes} from 'react';




const mapStateToProps = ({miss}) => ({
    miss
});



const MissCounter = (props) => {
    return (
        <section className='miss-count'>
            <span>Miss Count:</span> <span className='label miss'>{props.miss}</span>
        </section>
    );
};



MissCounter.propTypes = {
    miss: PropTypes.number.isRequired
};



export default connect(mapStateToProps)(MissCounter);
