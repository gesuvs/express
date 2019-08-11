import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class Server {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb+srv://SVN7V:futebol1996santos@jesusdb-csczi.azure.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
      })
    }

    private routes (): void {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      this.express.get('/', (req, res) => {
        return res.send('Hello World')
      })
    }
}
export default new Server().express
