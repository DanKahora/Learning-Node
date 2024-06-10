const express = require('express')
// express app
const app = express()
// listen for request
app.listen(3000) // no need to addlocal host

// Listen for request and send responses
app.get('/', (req, res)=>{
    // res.send ('<p> Learning Express</p>')
    res.sendFile('/views/bookstore.books.json', {root: __dirname})
})

app.get('/home', (req, res)=>{
    // res.send ('<p> Its my pleasure to code</p>')
    res.sendFile('/views/home.html', {root: __dirname})
})

// redirects
app.get('/home-us', (req, res)=>{
res.redirect('/home')
})

//404 page - must be at the bootom to be fired last if no matching url is found
app.use((req, res)=>{
    res.status(404).sendFile('/views/404.html', {root: __dirname})
})