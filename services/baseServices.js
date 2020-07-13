exports.getAll = async Model => await Model.find()
exports.createOne = async (Model, model_data) => await Model.create(model_data)
exports.deleteOne = async (Model, id) => await Model.findByIdAndDelete(id)
