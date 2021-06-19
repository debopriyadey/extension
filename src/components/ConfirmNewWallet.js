import React, { useState } from 'react'
import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { create } from '../api/api';
import { useHistory } from 'react-router-dom';
import { getBalance } from '../api/api';

export default function ConfirmNewWallet() {

    const history = useHistory()
    const userDetail = JSON.parse(localStorage.getItem('newWallet'))
    const address = userDetail.address

    const [userData, setUser] = useState({
        accountName: '',
        password: '',
    })

    const handleBalance = async (e) => {
        console.log('running')
        const data = await getBalance(userDetail.address)
        localStorage.setItem('balance', JSON.stringify(data))
        history.push('/profile')
    }

    const handleCreateAccount = (e) => {
        e.preventDefault()
        localStorage.setItem('ciferuser', JSON.stringify(userData))
        console.log(userData)
    }

    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <h3 className="card-title mt-3 mb-2 text-center">Cifer Wallet</h3>
                        <hr height="5px" size="5px" style={{ color: 'blueviolet' }} />
                        <form onSubmit={handleCreateAccount} >
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
                                <div className="col-12 my-1">
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
                                </div>
                            </div>
                            <div className="row button">
                                <div className="col-12 text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-light btn-block confirm-button"
                                        onClick={handleBalance} >Start </button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-3" style={{ backgroundColor: 'rgb(32, 31, 31)' }}>
                            <small className="">For strong password</small>
                            <ul data-testid="" className="suggest">
                                <li className=""><span data-testid="error-length" className="sc-clhSjD yLshi">8 or more
                                    characters.</span></li>
                                <li className=""><span data-testid="error-upper-case" className="sc-clhSjD yLshi">At least one upper
                                    case character.</span></li>
                                <li className=""><span data-testid="error-digit" className="sc-clhSjD yLshi">At least one
                                    digit.</span></li>
                                <li className=""><span data-testid="error-symbol" className="sc-clhSjD yLshi">At least one
                                    symbol.</span></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
