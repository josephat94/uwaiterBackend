const express = require("express");
const logger= require("./utils/logger");
const routes= require("./routes/index");
const config= require("./config/config");
const bodyParser = require("body-parser")
//Initializations
const app= express();
require('./config/database'); 
//settings
app.set('port', process.env.SERVER_PORT||3000);

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({encoded:false}))
app.use((req,res,next)=>{
    logger.info(`${req.url} - ${req.method}`);
    next();
})

//Routes
app.use(routes);

 //Estatics

 //Start Server

app.listen(app.get('port'), ()=>{

    logger.info("Servidor Iniciado en el puerto: "+ app.get('port'));

});