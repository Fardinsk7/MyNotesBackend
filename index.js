const connecttoMongo = require('./db')
const cors = require('cors')
const express = require('express')

connecttoMongo(); 

const app = express()
const port = 5000
app.use(cors())


app.use(express.json())
app.use("/",(req,res)=>{
  res.send("Hello World")
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, (err) => {
  if(err){console.log(err)}
  console.log(`MyNotes listening on port ${port}`)
})

