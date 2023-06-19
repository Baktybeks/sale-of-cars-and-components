const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Car = sequelize.define('car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    gear: {type: DataTypes.STRING, allowNull: false},
    wheel: {type: DataTypes.STRING, allowNull: false},
    belt: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
})

const Accessory = sequelize.define('accessory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
})

const UserCar = sequelize.define('user_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const UserAccessory = sequelize.define('user_accessory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Application = sequelize.define('application', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    car: {type: DataTypes.STRING, allowNull: false},
})

const AccessoryOrder = sequelize.define('accessory_order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CarOrder = sequelize.define('car_order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(CarOrder)
CarOrder.belongsTo(User)

Car.hasMany(CarOrder)
CarOrder.belongsTo(Car)

User.hasMany(AccessoryOrder)
AccessoryOrder.belongsTo(User)

Accessory.hasMany(AccessoryOrder)
AccessoryOrder.belongsTo(Accessory)

User.hasMany(UserCar)
UserCar.belongsTo(User)

Car.hasMany(UserCar)
UserCar.belongsTo(Car)

User.hasMany(UserAccessory)
UserAccessory.belongsTo(User)

Accessory.hasMany(UserAccessory)
UserAccessory.belongsTo(Accessory)

module.exports = {
    Car, User, Accessory, UserCar, UserAccessory, Application, AccessoryOrder, CarOrder
}





