import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './style.css';
import bnb from '../imgages/bnb.png'
import logo from '../imgages/base64.png'
import { makeTransaction } from '../api/api';
import { useHistory } from 'react-router-dom';

export default function ConfirmTransaction() {

    const history = useHistory()

    const userDetail = JSON.parse(localStorage.getItem('newWallet'))
    const transaction = JSON.parse(sessionStorage.getItem('transaction'))

    const handleConfirmTransaction = async(e) => {
        e.preventDefault()
        const data = await makeTransaction(transaction)
        history.push('/profile')
        alert(data)
    }

    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card ">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <div className="row my-4 acc py-3">
                            <div className="col-5">
                                <h6>{userDetail.address.slice(0, 10) + '...'}</h6>
                            </div>
                            <div className="col-2">
                                <ArrowForwardIcon />
                            </div>
                            <div className="col-5">
                                <h6>{transaction.addressTo.slice(0, 13) + '...' }</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4>Amount</h4>
                                <h2>{transaction.amount}</h2><small>BNB</small>
                            </div>
                        </div>
                        <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                        <form onSubmit={handleConfirmTransaction} >
                            <div className="row my-2">
                                <div className="col-4">
                                    <p> Gas Price: </p>
                                </div>
                                <div className="col-8 text-end">
                                    <h4>0.000022</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-center mb-2">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Gas Fees</label>
                                                <div className="input-group"> <input className="form-control" type="number"
                                                    placeholder="1.50" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Gas Price</label>
                                                <div className="input-group"> <input className="form-control" type="number"
                                                    placeholder={transaction.gas} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr height="5px" size="5px" style={{color: 'blueviolet'}} />
                            <div className="row mb-1">
                                <small className="text-end">Amount + Gas Fee</small>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5> Total: </h5>
                                </div>
                                <div className="col-8 text-end">
                                    <h4>1.000022</h4>
                                </div>
                            </div>
                            <div className="row button">
                                <div className="col-6">
                                    <button className="btn btn-light btn-block confirm-button">Cancel</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-light btn-block confirm-button" type="submit">Proceed</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
