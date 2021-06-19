import React, { useState } from 'react'

import './style.css';
import logo from '../imgages/base64.png'
import { makeTransaction } from '../api/api';
import { useHistory } from 'react-router-dom';

export default function Transaction() {

    const history = useHistory()
    const userDetail = JSON.parse(localStorage.getItem('newWallet'))

    const [transaction, setTransaction] = useState({
        privateKey: userDetail.privateKey,
        addressFrom: userDetail.address,
        addressTo: '',
        amount: '10000000000000000',
        gas: '500000',
    })

    const handleTransaction = (e) => {
        e.preventDefault()
        sessionStorage.setItem('transaction', JSON.stringify(transaction))
        //const data = makeTransaction(transaction)
        history.push('/confirmtransaction')
        console.log(transaction)
    } 


    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card ">
                    <div className="card-body">
                        <img src={logo} height="40" className="" />
                        <h4 className="card-title my-3 text-center">Send Currency</h4>
                        <form onSubmit={handleTransaction} >
                            <div className="row my-4">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="recivers address.."
                                            value={transaction.addressTo}
                                            onChange={(e) => setTransaction({ ...transaction, addressTo: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr height="5px" size="5px" style={{ color: 'blueviolet' }} />
                            <div className="row my-4">
                                <div className="col-4">
                                    <p> Assest: </p>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>BNB</option>
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
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="number"
                                                placeholder="amount"
                                                value={transaction.amount}
                                                onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
                                            />
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
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    placeholder="1.50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Gas Price</label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    placeholder="21000"
                                                    value={transaction.gas}
                                                    onChange={(e) => setTransaction({ ...transaction, gas: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr height="5px" size="5px" style={{ color: 'blueviolet' }} />
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
