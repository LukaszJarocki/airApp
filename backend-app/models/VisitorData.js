const mongoose = require('mongoose')

const VisitorDataSchema = new mongoose.Schema({
    cityFrom:{
        type: String,
        require: true   
    },
    cityTo:{
        type: String,
        require: true   
    },
    name:{
        type: String,
        require: true   
    },
    familyName:{
        type: String,
        require: true   
    },
    dateDepar:{
        type: Date,
        default: new Date()  
    },
    luggage:{
        type: String,
        require: true   
    },
    class:{
        type: String,
        require: true 
    },
    adults:{
        type: String,
        require: true   
    },
    kids:{
        type: String,
        require: true   
    },
    elders:{
        type: String,
        require: true   
    },
    d:{
        type: String,
    },
    class:{
        type: String,
    }
}
)

module.exports = mongoose.model('Products', VisitorDataSchema)