import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'

export default function Transaction() {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card ">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <h4 className="card-title my-3 text-center">Send Currency</h4>
                        <div className="row my-4">
                            <div className="col-12">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="recivers address.." />
                                </div>
                            </div>
                        </div>
                        <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                        <div className="row my-4">
                            <div className="col-4">
                                <p> Assest: </p>
                            </div>
                            <div className="col-8">
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p> Amount: </p>
                            </div>
                            <div className="col-8">
                                <div className="form-group">
                                    <div className="input-group"> <input className="form-control" type="number" placeholder="amount" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 mb-2">
                            <p className="agree-text">Transaction Fees </p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Gas Fees</label>
                                        <div className="input-group"> <input className="form-control" type="number" placeholder="1.50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Gas Price</label>
                                        <div className="input-group"> <input className="form-control" type="number" placeholder="21000" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                        <div className="row button">
                            <div className="col-6">
                                <button className="btn btn-primary btn-block confirm-button">Cancel</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary btn-block confirm-button"><a href="./transcationConfirm" >Proceed</a></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
