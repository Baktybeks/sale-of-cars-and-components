const Router = require('express')
const router = new Router()
const accessoryController = require('../controllers/accessoryController')

router.post('/', accessoryController.create)
router.get('/', accessoryController.getAll)
router.get('/:id', accessoryController.getOne)

module.exports = router