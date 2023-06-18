const {UserAccessory, Accessory} = require('../models/models')
const ApiError = require('../error/ApiError')

class AccessoryController {
    async create(req, res, next) {
        try {
            const {accessoryId, userId} = req.body
            const accessory = await UserAccessory.create({accessoryId, userId})
            return res.json(accessory)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const accessory = await UserAccessory.findAll()
        return res.json(accessory)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const accessory = await UserAccessory.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: Accessory,
                        attributes: ['title', 'description']
                    }
                ]
            }
        )
        return res.json(accessory)
    }

    async getOne(req, res) {
        const {id} = req.params
        const accessory = await UserAccessory.findOne(
            {
                where:{id}
            }
        )
        return res.json(accessory)
    }
}

module.exports = new AccessoryController()