const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routes/api.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', apiRoutes)

app.listen(8000, () => console.log('Now listening on port 8000'))