import express, { Application } from 'express'

class App {
    public app: Application
    constructor() {
        // this.settings()
        this.app = express()
        this.start()
    }

    public start(): void {
        this.app.set('port', process.env.PORT || 3000)
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        })
    }

}
const app = new App()
export default app


