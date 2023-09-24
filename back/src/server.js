
const app = require('./app')
const {appConfig} = require('./configs');


console.log(`Environment: ${process.env.NODE_ENV || 'none'}` )
console.log(`API Port => ${appConfig.PORT}` )


const PORT =  appConfig.PORT|| 3000 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

