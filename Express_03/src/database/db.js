const mongoose = require('mongoose')



async function connectDb() {
    await mongoose.connect("mongodb+srv://huzaiftarazi14_db_user:o0DkgLl3QTnGBYfB@practice1.ezcsvhw.mongodb.net/mydatabase1")
    console.log('Database Connected...')
}


module.exports = connectDb