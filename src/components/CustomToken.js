import React from 'react'

import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'

export default function CustomToken() {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card ">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <h4 className="card-title my-3 text-center">Custom Token</h4>
                        <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                        <div className="text-center mt-5 mb-2">
                            <div className="row my-3">
                                <div className="form-group">
                                    <label>Token Contract Address</label>
                                    <div className="input-group"> <input className="form-control" type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row  my-3">
                                <div className="form-group">
                                    <label>Token Symbol</label>
                                    <div className="input-group"> <input className="form-control" type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row  my-3">
                                <div className="form-group">
                                    <label>Decimals of Precision</label>
                                    <div className="input-group"> <input className="form-control" type="number" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                    <div className="row button">
                        <div className="col-12">
                            <button className="btn btn-primary btn-block confirm-button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
