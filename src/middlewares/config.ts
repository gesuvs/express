import express from 'express'
import cors from 'cors'


class Config {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
    }
    
    public middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
      }
}

const config = new Config()
export default config;
