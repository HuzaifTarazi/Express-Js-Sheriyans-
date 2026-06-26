const app = require('./src/app')
const connectDb = require('./src/database/db')


app.listen(3000, () => {
    console.log("server is running on port 3000")
})

connectDb()