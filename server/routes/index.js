const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')

const carRouter = require('./carRouter')
const userCarRouter = require('./userCarRouter')

const accessoryRouter = require('./accessoryRouter')
const userAccessoryRouter = require('./userAccessoryRouter')
const applicationRouter = require('./applicationRouter')
const carOrderRouter = require('./carOrderRouter')
const accessoryOrderRouter = require('./accessoryOrderRouter')


router.use('/user', userRouter)

router.use('/car', carRouter)
router.use('/user_car', userCarRouter)

router.use('/accessory', accessoryRouter)
router.use('/user_accessory', userAccessoryRouter)
router.use('/application', applicationRouter)
router.use('/car_order', carOrderRouter)
router.use('/accessory_order', accessoryOrderRouter)




module.exports = router