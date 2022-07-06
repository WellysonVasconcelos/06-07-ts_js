import { Request, Response, Router } from 'express';
import * as service from '../services/filmService';


const router = Router();

router.get('/', (req: Request, res: Response) =>{
    service.getAll().then((films) => {
        res.send(films);
    })
})

export default router;