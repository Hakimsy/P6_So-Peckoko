const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


userSchema.plugin(uniqueValidator); //Vérification que l'adresse email est unique


module.exports = mongoose.model('User', userSchema);
