const { Schema, model } = require('mongoose');
const HistoriaClinicaSchema = new Schema({
    nombre: { type: String, required:true },
    apellidos: {type:String, required:true},
    cc: {type: String, required: true},
    edad:{ type:Number, required:true},
    sexo: {type: String, required: true},
    ocupacion: {type: String, required: true},
    RH: {type: String, required:true},
    estatura: {type: String, required: true},
    habitos: {type:String, required: true},
    enfermedades: {type: String, required: true},
    enfermedadesHereditarias: {type: String, required: true},
    donante: {type: String, required: true},
    eventualidad: {type:String, required: true},
    fracturas: {type: String, required: true},
    alergiaMedicamento: {type: String, required: true},
    operaciones: {type: String, required: true},
    peso: {type: String, required: true},

    created_since: { type: Date, default: Date.now }
});
module.exports = model('HistoriaClinica',HistoriaClinicaSchema);