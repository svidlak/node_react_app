const Messages = require('../models/Messages')
const base = require('../services/baseServices')

exports.createNewMessage = async (req, res, next) => {
    try {
        const created_model = await base.createOne(Messages, req.body)
        res.status(200).json({data: created_model})
    }catch(Error){
        next({
            Error, Model: Messages.modelName
        })
    }
}

exports.getAllMessages = async (req, res, next) => {
    try {
        const models_array = await base.getAll(Messages)
        res.status(200).json({data: models_array})
    }catch(Error){
        next({
            Error, Model: Messages.modelName
        })
    }
}

exports.deleteMessage = async (req, res, next) => {
    try {
        const deleted_model = await base.deleteOne(Messages, req.body.id)
        res.status(200).json({data: deleted_model})
    }catch(Error){
        next({
            Error, Model: Messages.modelName
        })
    }
}
