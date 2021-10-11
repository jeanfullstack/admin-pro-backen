const mongoose = require('mongoose');


//La funcion async await retorna una promesa
const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {

        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
        
    }


}


module.exports = {
    dbConnection
}