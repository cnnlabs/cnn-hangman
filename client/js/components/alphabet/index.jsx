import {connect} from 'react-redux';
import {Alphabet} from './component';
import React, {Component, PropTypes} from 'react';
import {
    displayHits,
    incrementMiss
} from './actions';




const mapStateToProps = ({alphabet, maxAttempts, word}) => ({
    alphabet,
    maxAttempts,
    word
});

const mapDispatchToProps = (dispatch) => ({
    displayHits: (register, value) => dispatch(displayHits(register, value)),
    incrementMiss: (maxAttempts) => dispatch(incrementMiss(maxAttempts))
});



class Letters extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    dispatchResult(value) {
        let register = [];

        this.props.word.split('').forEach((v, i) => {
            return (value === v) ? register.push(i) : register;
        });

        return register.length > 0 ? this.props.displayHits(register, value) : this.props.incrementMiss(this.props.maxAttempts);
    }

    onClick(evt) {
        if (evt.target.dataset.letterActive === 'true') {
            this.dispatchResult(evt.target.dataset.text);
            evt.target.dataset.letterActive = 'false';
            evt.target.classList.add('disabled');
        }
    }

    render() {
        return (
            <div className="alphabet">
                <Alphabet alphabet={this.props.alphabet} onClick={this.onClick} />
            </div>
        );
    }
}



Letters.propTypes = {
    alphabet: PropTypes.array.isRequired,
    displayHits: PropTypes.func.isRequired,
    incrementMiss: PropTypes.func.isRequired,
    maxAttempts: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(Letters);
