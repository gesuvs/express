import express from 'express'

class IndexRoutes {
    public express: express.Application

    constructor() {
        this.express = express()
        this.index()
    }

    private index(): void {
        this.express.get('/', (req, res) => {
            return res.send('Hello World')
        })
    }
}

const indexRoutes = new IndexRoutes()
export default indexRoutes;