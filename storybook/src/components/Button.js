import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ primary, backgroundColor, size, label, handleClick, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            onClick={handleClick}
            {...props}
        >
            {label}
        </button>
    );
};

// Puedo definir los tipos de los props, asi como los valores por defecto
// Esto es documentado automaticamente por Storybook
Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};
  
Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
};