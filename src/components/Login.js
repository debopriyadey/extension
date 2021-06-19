import React, {useState} from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { create } from '../api/api';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('ciferuser')) === null ? {} : JSON.parse(localStorage.getItem('ciferuser'));

    console.log(user.password)

    const [signinData, setSigninData] = useState({
        password: ''
    })

    const createWallet = async(e) => {
        e.preventDefault()
        console.log('running')
        const data = await create()
        localStorage.setItem('newWallet', JSON.stringify(data))
        history.push('/newwallet')
    }
    
    const handleSignin = (e) => {
        e.preventDefault()
        console.log(signinData.password)
        if (signinData.password === user.password) {
            history.push('/profile')
        } else {
            alert("wrong password")
        }

    }

    return (
        <div>
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <br />
                        <br />
                        <h4 className="card-title my-5 text-center">Welcome to Cifer Wallet</h4>
                        <div className="form">
                            <form method="post" onSubmit={handleSignin}>
                                <div className="txt_field">
                                    <input 
                                        type="password" 
                                        required
                                        value={signinData.password}
                                        onChange={(e) => setSigninData({...signinData, password: e.target.value})} />
                                    <span></span>
                                    <label>Password</label>
                                </div>
                                <input type="submit" value="Login" />
                                <div className="signup_link"> <a href="#" onClick={createWallet}>Create a wallet</a> or <a href="./import">Import a wallet</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
