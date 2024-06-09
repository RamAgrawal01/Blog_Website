import React from 'react';
import ToggleButton from './ToggleButton';
import './Header.css';

const Header = () => {
    return (
        <div className="border border-x-0 w-full fixed top-0 py-3 bg-white header flex justify-between item-center px-4 z-20">

          <div>
          <h1 className='text-2xl font-bold  '>TORNED EDU HELP BLOGS</h1>
          </div>
          <ToggleButton />
          
        </div>
    );
};

export default Header;