import React, {PropTypes} from 'react';



export const Alphabet = (props) => {
    return (
        <div className='box alphabet-list' onClick={(e) => props.onClick(e) }>
            <ul>
                {props.alphabet.map((item, i) =>
                    <li key={i} data-letter-active="true" data-text={item} className='alphabet-list__item'>{item}</li>
                )}
            </ul>
        </div>
    );
};



Alphabet.propTypes = {
    alphabet: PropTypes.array.isRequired
};
