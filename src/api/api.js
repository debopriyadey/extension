import axios from 'axios';

export const create = async() => {
    const { data }= await axios.get(`http://localhost:5000/create`);
    return data;
}

export const getBalance = async(address) => {
    const { data }= await axios.get(`http://localhost:5000/balance/${address}`);
    return data;
}


export const getAccount = async( privateKey ) => {
    const { data }= await axios.get(`http://localhost:5000/account/${privateKey}`);
    return data;
}

export const makeTransaction = async ( transaction ) => {
    const { data } = await axios.post(`http://localhost:5000/transactions`, transaction)
    return data;
}
