const {Schema, model} = require('mongoose');
const schema = new Schema({
    sentDate: { type: Date, default: Date.now},
    name: { type: String, required: true },
    phoneNumber: {type: String, required: true},
    email: { type:String, required: true,unique: true },
    interestedIn:{ type: String, required: true},
    description:{ type: String, required: true}
});
module.exports = model('Request', schema);