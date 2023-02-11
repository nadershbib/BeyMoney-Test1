import  express from "express"
import "./dbConnect.js"
import userRoute from "./Routes/userRoute.js"
import transactionRoute from "./Routes/transactionsRoute.js"
const app = express()
const port = process.env.PORT || 5000











app.get('/', (req, res) => res.send('Hello World!'))


// routes

app.use(express.json())

app.use('/api/users/', userRoute);

app.use("/api/transactions/",transactionRoute)


app.listen(port, () => console.log(`Node Js server started at port ${port}!`))