import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'

export default function Login() {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <br />
                        <br />
                        <h4 className="card-title my-5 text-center">Welcome to Cifer Wallet</h4>
                        <div className="form">
                            <form method="post" action="./profile">
                                <div className="txt_field">
                                    <input type="password" required />
                                    <span></span>
                                    <label>Password</label>
                                </div>
                                <input type="submit" value="Login" />
                                <div className="signup_link"> <a href="./newwallet">Create a wallet</a> or <a href="./import">Import a wallet</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
