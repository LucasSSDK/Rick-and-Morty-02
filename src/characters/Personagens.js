const mongoose = require('mongoose');

const PersonagensSchema = 
new mongoose.Schema ({
    nome:{type: String, required: true},
    url:{type: String, required: true}
    
});

const Personagens = mongoose.model('personagens', PersonagensSchema);

module.exports = Personagens;