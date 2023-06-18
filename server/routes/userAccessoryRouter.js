const Router = require('express')
const router = new Router()
const userAccessoryController = require('../controllers/userAccessoryController')

router.post('/', userAccessoryController.create)
router.get('/', userAccessoryController.getAll)
router.get('/:id', userAccessoryController.getOne)
router.get('/user/:userId', userAccessoryController.getUserAll)

module.exports = router