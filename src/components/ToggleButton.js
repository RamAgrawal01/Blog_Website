import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`${theme==='light' ? 'bg-slate-100 text-black' : 'bg-slate-900 text-white' }
         px-4 py-2  rounded`}>

            {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
    );
};

export default ToggleButton;
