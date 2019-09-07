const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const HistoriaClinica = require('./models/HistoriaClinica')
// Initializations
const app = express();
require('./db')
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
app.use(cors());
 
app.use(express.json());
// routes
app.use('/api/historiasClinicas', require('./routes/historiasClinicas'));
// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
/*app.post('/api/HistoriaClinica', (req, res) =>{
    console.log('POST /api/HistoriaClinica')
    console.log(req.body)

    let historia = new HistoriaClinica(req.body)

    historia.save((err, historiaStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
        res.status(200).send({ historia: historiaStored })
    })
})*/

