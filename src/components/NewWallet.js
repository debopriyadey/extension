import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { useHistory } from 'react-router-dom';

export default function NewWallet() {

    const history = useHistory()

    return (
        <div>
            <div class="container d-flex justify-content-center">
                <div class="card">
                    <div class="card-body">
                        <img src={logo} height="40" class="" />
                        <h3 class="card-title mt-3 mb-2 text-center">Cifer Wallet</h3>
                        <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-3 seed text-center">01 seed</div>
                                <div class="col-3 seed text-center">02 seed</div>
                                <div class="col-3 seed text-center">03 seed</div>
                            </div>
                            <div class="row">
                                <div class="col-3 seed text-center">04 seed</div>
                                <div class="col-3 seed text-center">05 seed</div>
                                <div class="col-3 seed text-center">06 seed</div>
                            </div>
                            <div class="row">
                                <div class="col-3 seed text-center">07 seed</div>
                                <div class="col-3 seed text-center">08 seed</div>
                                <div class="col-3 seed text-center">09 seed</div>
                            </div>
                            <div class="row">
                                <div class="col-3 seed text-center">10 seed</div>
                                <div class="col-3 seed text-center">11 seed</div>
                                <div class="col-3 seed text-center">12 seed</div>
                            </div>
                        </div>
                        <a href="#" class="mt-4"> Get Private Key</a>
                        <div class="mt-3" style={{backgroundColor: 'rgb(32, 31, 31)'}}>
                            <ul class="suggest py-2">
                                <li>Do not lose! Your seed phrase cannot be recovered if you lose it.</li>
                                <li>Do not share! Your funds will be stolen if you use your seed phrase on a malicious/phishing
                            site.</li>
                                <li>Make a backup! Secure it like you would the millions of dollars it may someday be worth.
                        </li>
                                <li>Do not use on any other untrustworthy site. Your funds can (and will) will be stolen.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row button">
                        <div class="col-12 text-center">
                            <button class="btn btn-light btn-block confirm-button" onClick={()=>{history.push('/confirmnewwallet')}}> Continue </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
