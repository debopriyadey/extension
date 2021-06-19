import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { getBalance } from '../api/api';
import { useHistory } from 'react-router-dom';

export default function Profile() {

    const history = useHistory()

    window.onload = async(e) => {
        console.log('running')
        const data = await getBalance(userDetail.address)
        localStorage.setItem('balance', JSON.stringify(data))
        history.push('/profile')   
    }

    const userDetail = JSON.parse(localStorage.getItem('newWallet'));
    const balance = JSON.parse(localStorage.getItem('balance')) === null ? 0 : JSON.parse(localStorage.getItem('balance'));

    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <div>
                            <h4 className="card-title my-3 text-center"><span style={{ fontSize: 'xxx-large' }}>{balance}</span>.00000<small
                                style={{ fontSize: 'x-small' }}> BNB </small></h4>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="address"> <span style={{ color: 'darkgrey', fontSize: '0.9rem' }}>{userDetail.address}
                                </span><i className="far fa-copy"></i></p>
                            </div>
                        </div>
                        <div className="row mt-2 mb-4">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-light btn-block confirm-button"><a
                                        href="./transaction">Send</a> </button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-light btn-block confirm-button"><a
                                        href="">Recive</a></button>

                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true">Assets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                    type="button" role="tab" aria-controls="profile" aria-selected="false">Activity</button>
                            </li>
                        </ul>
                        <div className="tab-content mt-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row token">
                                    <div className="col-4 m-2 text-center">
                                        <img src={bnb} height="40" />
                                    </div>
                                    <div className="col-7">
                                        <div className="row">
                                            <h4>4.000000</h4>
                                        </div>
                                        <div className="row">
                                            <small> Binance Smart Chain</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row token">
                                    <div className="col-4 m-2 text-center">
                                        <img src={bnb} height="40" />
                                    </div>
                                    <div className="col-7">
                                        <div className="row">
                                            <h4>4.000000</h4>
                                        </div>
                                        <div className="row">
                                            <small> Binance Smart Chain</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row token">
                                    <div className="col-4 m-2 text-center">
                                        <img src={bnb} height="40" />
                                    </div>
                                    <div className="col-7">
                                        <div className="row">
                                            <h4>4.000000</h4>
                                        </div>
                                        <div className="row">
                                            <small> Binance Smart Chain</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        </div>

                        <div className="row button">
                            <div className="col-12 text-center">
                                <button className="btn btn-light btn-block confirm-button"><a href="./addToken">Add Token</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
