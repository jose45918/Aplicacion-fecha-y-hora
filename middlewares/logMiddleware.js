const logMiddleware = (req, res, next) => {
    console.log(`Fecha y hora: ${new Date()}`);
    console.log('Mensaje de middleware: Acceso a la ruta', req.path);
    next();
};

module.exports = logMiddleware;
