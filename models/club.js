const mongoos = require('mongoose');
const schema = mongoos.Schema;

let clubScheema = new schema({
    flightnum :{
        type:Number
    },
    flightdur:{
        type :Number
    },
    flightdes:{
        type:String
    },
    flightsou:{
        type:String
    },
    flightdate:{
        type:Date
    },
    flighttime:{
        type:String
    }
})

module.exports = mongoos.model('flight', clubScheema)