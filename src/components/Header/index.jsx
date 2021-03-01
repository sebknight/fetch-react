import React from 'react';
import Button from '../Button';

const Header = () => 
    <header className="">
        <h1>Ready to see a dog?</h1>
        <div className="btn-container">
            <Button title="Fetch dogs" label="Fetch!" />
            <Button title="Cancel request" label="Cancel" />
        </div>
        <div className="loading-indicator">
            <div className="lds-heart"><div></div></div>
        </div>
    </header>

export default Header;