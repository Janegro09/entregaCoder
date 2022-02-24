const { response } = require('express')

const productosGet = (req, res = response) => {
    res.json({
        msg:'Get Api - controlador'
    })
}
const productosGetOne = (req, res = response) => {
    const id = parseInt(req.params.id)

    res.json({
        msg:'GetOne Api - controlador',
        id
    })
}

const productosPost = (req, res = response) => {
    let total=req.body

    res.json({
        ...total
    })
}

const productosPut = (req, res = response) => {
    const id = parseInt(req.params.id)

    res.json({
        msg:'Put Api',
        id
    })
}

const productosDelete = (req, res = response) => {
    const id = parseInt(req.params.id)

    res.json({
        msg:'Delete Api',
        id
    })
}


module.exports = {
    productosGet,
    productosGetOne,
    productosPost,
    productosPut,
    productosDelete
}