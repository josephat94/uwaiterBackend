const {createLogger,format, transports}= require("winston")

module.exports= createLogger({
    transports:[
        new transports.Console({
            level:"debug",
            format: format.combine(format.simple(), format.timestamp(),
                    format.printf(info=>`[${info.timestamp}] ${info.level} ${info.message} `)
            )
        })
    ]
})