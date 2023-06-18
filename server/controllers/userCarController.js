const {Car, UserCar} = require('../models/models')
const ApiError = require('../error/ApiError')

class CarController {
    async create(req, res, next) {
        try {
            const {carId, userId} = req.body
            const car = await UserCar.create({carId, userId})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const car = await UserCar.findAll()
        return res.json(car)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const car = await UserCar.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: Car,
                        attributes: ["name", "description", "gear", "wheel", "belt", "price"],
                    },
                ]
            }
        )
        return res.json(car)
    }

    async getOne(req, res) {
        const {id} = req.params
        const car = await UserCar.findOne(
            {
                where:{id}
            }
        )
        return res.json(car)
    }
}

module.exports = new CarController()