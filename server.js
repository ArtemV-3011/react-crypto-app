const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'frontend', 'dist')))

app.listen(port, () => console.log('Server has been started on port 80'))
