import React from "react";

const InscriptionForm = ({ isShowSignUp}) => {
    return (
        <div className={`${!isShowSignUp ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text">Inscription</h1>
                        <label>Identifiant</label><br></br>
                        <input
                            type="text"
                            name="username"
                            className="login-box"/>
                        <br></br>
                        <label>Adresse mail</label><br></br>
                        <input
                            type="text"
                            name="mail"
                            className="login-box"/>
                        <br></br>
                        <label>Mot de passe</label><br></br>
                        <input
                            type="password"
                            name="password"
                            className="login-box"/>
                        <br></br>
                        <label>Répéter mot de passe</label><br></br>
                        <input
                            type="password"
                            name="password"
                            className="login-box"/>
                        <br></br>
                        
                        <input type="submit" value="LOGIN" className="login-btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InscriptionForm