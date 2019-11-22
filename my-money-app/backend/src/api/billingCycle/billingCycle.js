const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: {type:String, required:[true, 'Informe o Nome do Registro de Crédito!'],},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do Crédito!'],}
});

const debtSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Informe o Nome do Registro de Débito!']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do Débito!'],},
    status: {type: String, required: false, uppercase:true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'Informe o Nome do Ciclo de Pagamento!'],},
    month: {type: Number, min: 1, max: 12, required: [true, 'Informe o Mês Referente ao Ciclo de Pagamento!'],},
    year: {type: Number, min: 1970, max: 2999, required:[true, 'Informe o Ano Referente ao Ciclo de Pagamento!'],},
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);