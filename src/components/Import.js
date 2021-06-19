import React, { useState } from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { getAccount, getBalance } from '../api/api';
import { useHistory } from 'react-router-dom';

export default function Import() {

    const history = useHistory()

    const [userData, setUser] = useState({
        accountName: '',
        password: '',
    })

    const [privatekey, setPrivatekey] = useState({
        privatekey: '',
    })

    const handleImport = async(e) => {
        e.preventDefault()
        console.log(privatekey.privatekey)
        const data = await getAccount(privatekey.privatekey)
        localStorage.setItem('newWallet', JSON.stringify(data))
        localStorage.setItem('ciferuser', JSON.stringify(userData))
        const balance = await getBalance(data.address)
        localStorage.setItem('balance', JSON.stringify(balance))
        history.push('/profile')
    }

    return (
        <div>
            <div class="container d-flex justify-content-center">
                <div class="card">
                    <div class="card-body">
                        <img src="./base64.png" height="40" class="" />
                        <h3 class="card-title mt-3 mb-2 text-center">Import Existing Wallet</h3>
                        <hr height="5px" size="5px" style={{ color: 'blueviolet' }} />
                        <form onSubmit={handleImport}>
                            <div class="row my-4">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Private Key</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="private key"
                                            value={privatekey.privatekey}
                                            onChange={(e) => setPrivatekey({...privatekey, privatekey: e.target.value})} />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Account Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Account"
                                            value={userData.accountName}
                                            onChange={(e) => setUser({ ...userData, accountName: e.target.value })}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4 ">
                                <div className="col-12 my-1">
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="password"
                                            value={userData.password}
                                            onChange={(e) => setUser({ ...userData, password: e.target.value })}
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-12 my-1">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="password"
                                            value={userData.password}
                                            onChange={(e) => setUser({ ...userData, password: e.target.value })}
                                        />
                                    </div>
                                </div> */}
                            </div>
                            <div class="mt-3" style={{ backgroundColor: 'rgb(32, 31, 31)' }}>
                                <small class="">For strong password</small>
                                <ul data-testid="" class="suggest">
                                    <li class=""><span data-testid="error-length" class="sc-clhSjD yLshi">8 or more
                                        characters.</span></li>
                                    <li class=""><span data-testid="error-upper-case" class="sc-clhSjD yLshi">At least one upper
                                        case character.</span></li>
                                    <li class=""><span data-testid="error-digit" class="sc-clhSjD yLshi">At least one
                                        digit.</span></li>
                                    <li class=""><span data-testid="error-symbol" class="sc-clhSjD yLshi">At least one
                                        symbol.</span></li>
                                </ul>
                            </div>

                            <div class="row button">
                                <div class="col-12 text-center">
                                    <button class="btn btn-light btn-block confirm-button" type="submit" >Import </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
