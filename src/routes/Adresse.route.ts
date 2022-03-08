import { Adresse } from '../entity/Adresse';
import {getRepository} from "typeorm";
import { express, Router} from 'express';

const AdresseRouter = Router();

AdresseRouter.get('/getAll', (req, res) => {
    const AdresseRepository = getRepository(Adresse);

    AdresseRepository.find().then((adresses) => {
        res.send(adresses);
    });
})

AdresseRouter.post('/testAdress', (req, res) => {
    console.log(req.query);
    res.send("testAdress");
});


/**
 * Route pour insérer une adresse
 * @param  'adresse' Object Adresse appelé "adresse" dans le body de la requête
 * @return  JSON
 */
AdresseRouter.post('/insert', (req, res) => {
    const AdresseRepository = getRepository(Adresse);
    let adressePOST:Adresse = req.body.adresse;

    //Insertion en base de donnée
    AdresseRepository.save(adressePOST).then(result => {
        console.log(result)
    })



})


export default AdresseRouter;
