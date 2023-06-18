const {Accessory} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class AccessoryController {
    async create(req, res, next) {
        try {
            const {title, description} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const accessory = await Accessory.create({title, description,image: fileName})
            return res.json(accessory)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 200
        let offset = page * limit - limit
        const accessory = await Accessory.findAll({limit, offset})
        return res.json(accessory)
    }

    async getOne(req, res) {
        const {id} = req.params
        const accessory = await Accessory.findOne(
            {
                where:{id}
            }
        )
        return res.json(accessory)
    }
}

module.exports = new AccessoryController()