import express from 'express'
import cors from 'cors'
// import mongoose from 'mongoose'
import keys from '../database/keys'
import config from '../middlewares/config';


class Server {
    public express: express.Application
    
    public constructor () {
      this.express = express()
      this.databaseConnect()
      this.routes()
      this.config()
    }

    private config(){
      config.middlewares()
    }
    private databaseConnect():void {
        keys.database()
    }

    private routes (): void {
      this.express.get('/', (req, res) => {
        return res.send('Hello World')
      })
    }
}
export default new Server().express
