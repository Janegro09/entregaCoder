const { response } = require('express')

const carritoGet = (req, res = response) => {
    res.json({
        msg:'Get Api - controlador'
    })
}

const carritoPost = (req, res = response) => {
    res.json({
        msg:'Post Api'
    })
}

const carritoPut = (req, res = response) => {
    res.json({
        msg:'Put Api'
    })
}

const carritoDelete = (req, res = response) => {
    res.json({
        msg:'Delete Api'
    })
}


module.exports = {
    carritoGet,
    carritoPost,
    carritoPut,
    carritoDelete
}