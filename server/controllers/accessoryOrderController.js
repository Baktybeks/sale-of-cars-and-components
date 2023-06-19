const {User, Accessory, AccessoryOrder} = require('../models/models')
const ApiError = require('../error/ApiError')

class AccessoryOrderController {
    async create(req, res, next) {
        try {
            const {accessoryId, userId} = req.body
            const car = await AccessoryOrder.create({accessoryId, userId})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const car = await AccessoryOrder.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["login"]
                    },
                    {
                        model: Accessory,
                        attributes: ["title", "description"],
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
        const car = await AccessoryOrder.findOne(
            {
                where:{id}
            }
        )
        return res.json(car)
    }
}

module.exports = new AccessoryOrderController()