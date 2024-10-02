const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    usuario:{
        type: String,
        Required: true
    },
    correo:{
        type:String,
        Required: true
    },
    clave:{
        type: String,
        Required: true
    }
});
userSchema.methods.encryptClave = async(clave) =>  {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave,salt);
}

module.exports = mongoose.model('User',userSchema);