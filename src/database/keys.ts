import mongoose from 'mongoose';

export default {
    database(): void {
        mongoose.connect('mongodb+srv://SVN7V:futebol1996santos@jesusdb-csczi.azure.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }).then(()=>{
            console.log('Conectado')
        }).catch(err => console.log(err))
    }
}