const express = require('express')
const app = express()
const dotenv = require('dotenv');


dotenv.config();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || 6013, () => console.log(`soeasy backend is running on port ${port}`))