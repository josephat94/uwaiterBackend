const mongoose = require("mongoose");
const uri = "mongodb+srv://crewsoft:PhiIN00mnV94c2J5@uwaiter-e6zpt.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db => console.log("DATABASE IS ALREADY CONNECTED"))
    .catch(err => console.error(err)) 