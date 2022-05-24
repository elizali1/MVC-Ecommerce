
const express = require('express')

const getData = require('./controllers/getData')

const productsData = getData()

const app = express()
const PORT = 3001

// app.use(express.json())

//set up view engine
app.set('view engine', 'ejs')
app.set('views', './views')
//root route
app.get('/', (req,res) => {
    res.render('home', {pageTitle: 'Home Page', pageHeader: 'Welcome!'})
})

app.get('/products', (req,res) => {
    res.render('products', {data: productsData, pageTitle: 'Products Page'})
})

app.get('/products/new', (req,res) => {
    res.render("new-product")
})

app.get('products/:id', (req,res) => {
    console.log(req.params)
    const result = products.filter(item => item.id === req.params.id)
    res.render('productId', {product: result[0]})
})

// app.post('/products', (req,res) => {
//     productsData.push(req.body)
//     res.redirect('/products')
// })


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})