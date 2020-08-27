const Bean = require('./Bean.js')
const Drink = require('./Drink.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')

Bean.hasMany(Drink)
Drink.belongsTo(Bean)

Syrup.hasMany(Drink)
Drink.belongsTo(Syrup)

Topping.hasMany(Drink)
Drink.belongsTo(Topping)

module.exports = { Drink, Syrup, Topping, Bean }