import React from 'react';
import Button from '../Button';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    
    return (
        <header className="">
            <h1>Ready to see a dog?</h1>
            <div className="btn-container">
                <Button 
                // Payload is a hack to get around redux not recognising this action
                    onClick={() => dispatch({ type: 'dog/fetchDogRequest' })}
                    title="Fetch dog"
                    label="Fetch!"
                />
                <Button title="Cancel request" label="Cancel" />
            </div>
            <div className="loading-indicator">
                <div className="lds-heart"><div></div></div>
            </div>
        </header>    
    )
}

export default Header;