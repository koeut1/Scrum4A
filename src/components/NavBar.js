import React from "react";
function NavBar({handleLoginClick}){
    const handleClick =() => {
        handleLoginClick()
        handleSignUpClick()
    }

    return (
        <div className="navbar">
            <div>
                <span onClick={handleClick} className="loginicon">Connexion</span>
                <span onClick={handleClick} className="SignUpicon">Inscription</span>
            </div>
        </div>
    );
}

export default NavBar;