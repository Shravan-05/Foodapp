const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 7000
var cors = require('cors')

app.use(cors())
//available routes
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
    
app.use('/api/cart',require('./routes/cart'));
app.use('/api/product',require('./routes/product'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});