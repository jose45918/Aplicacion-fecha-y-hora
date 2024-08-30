const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Accedieron a la ruta 1');
    res.send('Ruta 1');
});

module.exports = router;
