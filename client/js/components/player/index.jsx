/* WIP
import {
    clearMessage,
    userLost,
    userWon} from '../../state/actions';
import React, {Component} from 'react';


const mapStateToProps = ({blocks, maxAttempts}) => ({
    blocks,
    maxAttempts,
});

const mapDispatchToProps = (dispatch) => ({
    clearMessage: () => dispatch(clearMessage()),
    userLost: () => dispatch(userLost()),
    userWon: () => dispatch(userWon())
});



class Player extends Component {
    constructor(props) {
        super(props);
    }

    //clear the input
    clear() {
        this.props.clearMessage();
    }

    filter(arr) {
        if (!Array.isArray(arr)) {
            return arr;
        }

        return arr.filter((value, i) => value === this.word()[i]);
    }

    hasUserLost() {
        return Number(this.props.maxAttempts) === Number(this.props.miss + 1);
    }

    hasUserWon() {
        return this.filter(this.props.blocks).length === this.props.blocks.length;
    }

    isGameOver() {
        let check = [this.hasUserLost(), this.hasUserWon()];
        console.log(check);
        return (check.indexOf(true)) ? this.props.userLost() : this.props.userWon();
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Player);
*/
