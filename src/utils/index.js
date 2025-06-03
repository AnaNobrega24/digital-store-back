function rotaProtegida(req, res, next){
    if(!req.headers.authorization){
        res.send({
            tipo: "warning",
            mensagem: "Não autorizado"
        });
    }

    next();
}

module.exports = {
    rotaProtegida
}