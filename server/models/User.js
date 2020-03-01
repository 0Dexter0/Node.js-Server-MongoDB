const {Schema, model} = require('mongoose');
const schema = new Schema({
    email: { type:String, required: true,unique: true },
    name: { type:String, required: true },
    registerDate: { type: Date, default: Date.now }
});
schema.path('name').index({text: true});
module.exports = model('User', schema);