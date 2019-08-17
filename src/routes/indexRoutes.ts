import { Router } from 'express';
class IndexRoutes {
    public router:Router = Router();

    constructor() {
        this.indexRoutes()
    }

    public indexRoutes(): void {
        this.router.get('/', indexController.index)
    }
}

const indexRoutes = new IndexRoutes()
export default indexRoutes.router