import express from "express"
import passport  from "passport"
import passport_strategy from "./config/passport.js"
import connectDB from "./config/db.js"
import Router from "./routes/index.js"
const app = express()
const port = 3000


connectDB();
passport_strategy(passport)
app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1', Router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
