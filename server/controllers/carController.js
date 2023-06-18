const {Car} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class CarController {
    async create(req, res, next) {
        try {
            const {name, description, gear, wheel, belt, price} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const car = await Car.create({name, description, gear, wheel, belt, price, image: fileName})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 200
        let offset = page * limit - limit
        const car = await Car.findAll({limit, offset})
        return res.json(car)
    }

    async getOne(req, res) {
        const {id} = req.params
        const car = await Car.findOne(
            {
                where:{id}
            }
        )
        return res.json(car)
    }
}

module.exports = new CarController()