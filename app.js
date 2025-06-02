const express = require('express')
const path = require('path')
const 

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => [
    console.log(`Server rodando em http://localhost:${PORT}`)
])