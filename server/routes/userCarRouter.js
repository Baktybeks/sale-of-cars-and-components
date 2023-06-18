const Router = require('express')
const router = new Router()
const userCarController = require('../controllers/userCarController')

router.post('/', userCarController.create)
router.get('/', userCarController.getAll)
router.get('/:id', userCarController.getOne)
router.get('/user/:userId', userCarController.getUserAll)

module.exports = router