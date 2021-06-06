import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
 
export default function AddToken() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                    <img src={logo} height="40" className="" />
                    <h4 className="card-title my-3 text-center">Search Token</h4>
                    <div className="row my-4">
                        <div className="col-12">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <hr height="5px" size="5px" style={{color:'blueviolet'}} />
                    <div>
                        <div className="row token">
                            <div className="col-2 my-2 text-center">
                                <img src={bnb} height="40" />
                            </div>
                            <div className="col-7 my-2">
                                <div className="row">
                                    <h6> Binance Smart Chain</h6>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary btn-block">Add</button>
                            </div>
                        </div>
                        <div className="row token">
                            <div className="col-2 my-2 text-center">
                                <img src={bnb} height="40" />
                            </div>
                            <div className="col-7 my-2">
                                <div className="row">
                                    <h6> Binance Smart Chain</h6>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary btn-block">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="row button">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary btn-block confirm-button"><a href="./customtoken">Custom
                            Token</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
