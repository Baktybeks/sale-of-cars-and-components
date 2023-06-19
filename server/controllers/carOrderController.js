const {User, Car, CarOrder} = require('../models/models')
const ApiError = require('../error/ApiError')

class CarOrderController {
    async create(req, res, next) {
        try {
            const {carId, userId} = req.body
            const car = await CarOrder.create({carId, userId})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const car = await CarOrder.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["login"]
                    },
                    {
                        model: Car,
                        attributes: ["name", "description", "gear", "wheel", "belt", "price"],
                    },
                ],
            });
            return res.json(car);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const car = await CarOrder.findOne(
            {
                where:{id}
            }
        )
        return res.json(car)
    }
}

module.exports = new CarOrderController()