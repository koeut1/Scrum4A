import React from "react";
function NavBar({setIsShowSignUp, setIsShowLogin}){
    const handleSignUpClick=()=>{
		setIsShowSignUp((isShowSignUp)=> !isShowSignUp)
	}

    const handleLoginClick =()=>{
		setIsShowLogin((isShowLogin)=> !isShowLogin)
	}

    return (
        <div className="navbar">
            <div>
                <span onClick={handleLoginClick} className="loginicon">Connexion</span>
                <span onClick={handleSignUpClick} className="SignUpicon">Inscription</span>
            </div>
        </div>
    );
}

export default NavBar;