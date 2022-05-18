import { Router } from 'express';
import{Adresse} from '../entity/Adresse';
import {getRepository} from "typeorm";

const AdresseRouter = Router();

AdresseRouter.get('/adresse', (req, res) => {
    const AdresseRepository = getRepository(Adresse);

    AdresseRepository.find().then((adresse) => {
        res.send(adresse);
    });
})
export default AdresseRouter;