const { Router } = require('express');
const router = Router();
const HistoriaClinica = require('../models/HistoriaClinica');
router.get('/', async (req,res) =>{
    const historiasClinicas = await HistoriaClinica.find().sort('-_id');
    res.json(historiasClinicas);
});
router.post('/', (req, res) =>{
    console.log('POST /api/HistoriaClinica')
    console.log(req.body)

    let historia = new HistoriaClinica(req.body)

    historia.save((err, historiaStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
        res.status(200).send({ historia: historiaStored })
    })
})
router.delete('/:userId', async (req, res) => {
    let userId = req.params.userId

    HistoriaClinica.findById(userId, (err, deudor) => {
        if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}` })

        historia.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}` })
            res.status(200).send({ message: 'El Usuario ha sido eliminado' })
        })
    })
})

router.put('/:userId', async (req, res) => {

    let userId = req.params.userId

    let update = req.body

    HistoriaClinica.findByIdAndUpdate(userId, update, (err, historiaUpdated)=>{
        if(err) res.status(500).send({message: `Error al borrar el Usuario: ${err}`})

        res.status(200).send({historia: historiaUpdated})
    })
})
module.exports = router;