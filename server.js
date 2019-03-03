const {SyncAndSeed, Product, Category} = require('./db')

const express = require('express')
const app = express()
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = 5000;



app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride())

app.use(morgan('dev'));

app.get('/api/categories', (req, res, next)=>{
    Category.findAll().then(categories =>{
        console.log(categories)
        res.send(categories.map(each => `<ul> ${each.name} </ul>`)).join(" ")
    })
   // res.send(path(''))
})


app.post('/api/categories', (req, res, next)=>{ 

    const {name} = req.body
    Category.create({name})
    .then((created)=>{
        res.send(created)
    })
})

app.post('/api/categories/:id/products', (req, res, next)=>{ 
    const {id} = req.params
    Product.create({name})
    .then((created)=>{
        res.send(created)
    })
})

app.delete('/api/categories/:id', (req, res, next)=>{
    const {id} = req.params
    return Category.destroy({where:{
        id: id
    }}).then(deleted =>{
        console.log(deleted)
        res.send(`Done Deleting ${deleted}`)
    })
})


app.delete('/api/products/:id', (req, res, next)=>{
    const {id} = req.params
    return Product.destroy({where:{
        id: id
    }}).then(deleted =>{
        console.log(deleted)
        res.send(`Done Deleting ${deleted}`)
    })
})

app.listen(PORT, console.log(`listening on ${PORT}`))

SyncAndSeed()

