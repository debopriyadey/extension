import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'

export default function Import() {
    return (
        <div>
            <div class="container d-flex justify-content-center">
                <div class="card">
                    <div class="card-body">
                        <img src="./base64.png" height="40" class="" />
                        <h3 class="card-title mt-3 mb-2 text-center">Import Existing Wallet</h3>
                        <hr height="5px" size="5px" style={{ color: 'blueviolet' }} />
                        <div class="row my-4">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Private Key</label>
                                    <input class="form-control" type="text" placeholder="private key" />
                                </div>
                            </div>
                        </div>
                        <div class="row my-4 ">
                            <div class="col-12 my-1">
                                <div class="form-group">
                                    <label>New Password</label>
                                    <input class="form-control" type="password" placeholder="private key" />
                                </div>
                            </div>
                            <div class="col-12 my-1">
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input class="form-control" type="password" placeholder="private key" />
                                </div>
                            </div>
                            <div class="mt-3" style={{backgroundColor: 'rgb(32, 31, 31)'}}>
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

                        </div>
                        <div class="row button">
                            <div class="col-12 text-center">
                                <button class="btn btn-primary btn-block confirm-button"><a href="./profile">Import</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
