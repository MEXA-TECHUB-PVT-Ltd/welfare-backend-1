const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://fairyqueen214:FAIRYQUin214@cluster0.kyo3a.mongodb.net/welfare-db?retryWrites=true&w=majority', { useNewUrlParser: true }, (error) => {
    // const connection = mongoose.connect('mongodb://localhost:27017/welfare_org', { useNewUrlParser: true }, (error) => {welfare-db
    if (error) {
        console.log(error)
    }
    else {
        console.log('Connection established')
    }
})

module.exports = connection