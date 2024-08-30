const express = require('express');
const logMiddleware = require('../middlewares/logMiddleware');
const ruta1 = require('../rutas/ruta1');
const ruta2 = require('../rutas/ruta2');

// Crear la aplicación Express
const app = express();

// Utilizar el middleware de logging
app.use(logMiddleware);

// Usar las rutas definidas
app.use('/ruta1', ruta1);
app.use('/ruta2', ruta2);

// Configurar el puerto
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
