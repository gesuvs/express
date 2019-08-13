import express from 'express'
import cors from 'cors'
// import mongoose from 'mongoose'
import keys from '../database/keys'
import config from '../middlewares/config';
import index from '../routes/indexRoutes';


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
      index.express
    }
}
export default new Server().express
