import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ClassContext() {
    function themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={themeStyles(darkTheme)}>
                    Class Theme
                </div>
            }}
        </ThemeContext.Consumer>
    )
}