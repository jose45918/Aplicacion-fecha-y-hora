const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Accedieron a la ruta 2');
    res.send('Ruta 2');
});

module.exports = router;
