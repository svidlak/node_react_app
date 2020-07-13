module.exports = ({Error, Model}, req, res, next) => {
    const error = error_types(Error, Model, req.method)
    res.status(400).json({error: error})
};

const error_types = (Error, model, method) => {
    let error_message
    switch(method){
        case 'DELETE': error_message = `Failed to delete ${model}`; break
        case 'GET': error_message = `Failed to get ${model}`; break
        case 'POST': error_message = mongoose_validator_error(Error, model); break
        default: error_message = 'Use valid request type'
    }
    return error_message
}

const mongoose_validator_error = (validator, model) => {
    try {
        return Object.keys(validator.errors).map( key => {
            return { [key]: validator.errors[key].properties.message }
        })
    }catch(e){
        return `Failed to create ${model}`
    }
}
