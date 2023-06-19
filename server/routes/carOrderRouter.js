const Router = require('express')
const router = new Router()
const carOrderController = require('../controllers/carOrderController')

router.post('/', carOrderController.create)
router.get('/', carOrderController.getAll)
router.get('/:id', carOrderController.getOne)

module.exports = router