const Express = require("express") // importing express class
const path = require('path');
const dotenv = require("dotenv").config()
const colors = require("colors")
const connectDB = require("./config/db")
const cors = require("cors")

const port = process.env.PORT || 5000

//connecting with DB
connectDB()

const { errorHandler } = require("./middleware/errorMiddleware")

const app = new Express()// init express object

app.use(cors())
//middleware for body parser
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))


//API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));


//overwrite the default express errorhandler
app.use(errorHandler)


app.listen(port, () => console.log(`Server running on port ${port}`))

//-----------------------------------

// // Serve frontend
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));

//     app.get('*', (req, res) =>
//         res.sendFile(
//             path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//         )
//     );
// } else {
//     app.get('/', (req, res) => res.send('Please set to production'));
// }
