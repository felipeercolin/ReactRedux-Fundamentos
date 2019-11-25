const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do Usuário'], },
    email: { type: String, required: [true, 'Informe o Email'], },
    password: { type:String, min: 6, max:12, required: [true, 'Informa uma senha'], }
});

module.exports = restful.model('User', userSchema);