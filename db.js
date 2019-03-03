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
        Product.create({name: 'Ola', id1: 1})
        Category.create({name: 'Iyan'})
    }).catch((err)=>{
        console.log(`This is my error: ${err}`)
    })
} 

Category.hasMany(Product)

//SyncAndSeed()

module.exports = {SyncAndSeed, Category, Product}