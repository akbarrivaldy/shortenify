const express = require('express')
const app = express()

// Database config
const connection = require('./config/db.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))


// Routes config
app.use(express.json({
  extended: false
}))
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

// Listen for incoming requests
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started, listening on PORT ${PORT}`))