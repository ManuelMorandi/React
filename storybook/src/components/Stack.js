import React from 'react';
import PropTypes from 'prop-types';

export const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "noWrap",
        flexDirection: direction,
    }

    return <div style={style}>{children}</div>
};

Stack.propTypes = {
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
}