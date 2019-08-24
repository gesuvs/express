import cors from 'cors'
import keys from '../database/keys'
import config from '../middlewares/config';
import indexRoutes from '../routes/indexRoutes';
import app from '../app/app';

class Server {
    // public express: express.Application
    
    public constructor () {
      // this.express = express()
      this.databaseConnect()
      this.config()
      // this.routes()
      this.app()
    }

    private config(){
      config.middlewares()
    }
    private databaseConnect():void {
        keys.database()
    }
    // private routes():void{
    //   indexRoutes.indexRoutes()
    // }
    private app():void{
      app.start()
    }
}
export default new Server()
