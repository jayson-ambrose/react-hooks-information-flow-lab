import React from 'react'

function Header ({onDarkModeClick, mode}) {

    // function onDarkModeClick(isDarkMode) {
    //     setIsDarkMode((isDarkMode) => !isDarkMode);
    //     checkMode()
    // } 

    return (

        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {mode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
    
}

export default Header;