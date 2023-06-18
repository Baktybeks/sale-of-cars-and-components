const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')

const carRouter = require('./carRouter')
const userCarRouter = require('./userCarRouter')

const accessoryRouter = require('./accessoryRouter')
const userAccessoryRouter = require('./userAccessoryRouter')
const applicationRouter = require('./applicationRouter')

router.use('/user', userRouter)

router.use('/car', carRouter)
router.use('/user_car', userCarRouter)

router.use('/accessory', accessoryRouter)
router.use('/user_accessory', userAccessoryRouter)
router.use('/application', applicationRouter)



module.exports = router