import axios from  'axios';
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3333/api';

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload: request
    };
}

export function create(values){
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com Sucesso!');
        })
        .catch(error => {
            error.reponse.data.errors.array.forEach(erro => toastr.error('Erro', erro));
        });
    return {
        type:'BILLING_CYCLES_CREATED',
    };
}