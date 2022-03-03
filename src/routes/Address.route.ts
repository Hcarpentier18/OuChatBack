import { Adress } from '../entity/Adress';
import {getRepository} from "typeorm";
import { express, Router} from 'express';

const AddressRouter = Router();

AddressRouter.get('/getAll', (req, res) => {
    const AddressRepository = getRepository(Adress);

    AddressRepository.find().then((addresses) => {
        res.send(addresses);
    });
}).catch((error) => {
    console.error(error);
})

AddressRouter.post('/insert', (req, res) => {
    let address:Adress = req.query.address;
    console.log("Je suis la");
    // console.log(address.city);
})


export default AddressRouter;
