const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/acme_products');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
        id1: {
        type: Sequelize.INTEGER,
        allowNull: false,
       
    },

})


const SyncAndSeed = () => {
    return db.sync({force: true})
    .then(()=>{
        Product.bulkCreate([{name: 'Beans', id1: 1}, {name: 'Salad', id1: 2}])
        Category.bulkCreate([{name: 'Protein'}, {name: 'Vegetable'}])
    }).catch((err)=>{
        console.log(`This is my error: ${err}`)
    })
} 

Category.hasMany(Product)
//Product.hasOne(Category)

//SyncAndSeed()

module.exports = {SyncAndSeed, Category, Product}