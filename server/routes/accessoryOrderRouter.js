const Router = require('express')
const router = new Router()
const accessoryOrderController = require('../controllers/accessoryOrderController')

router.post('/', accessoryOrderController.create)
router.get('/', accessoryOrderController.getAll)
router.get('/:id', accessoryOrderController.getOne)

module.exports = router