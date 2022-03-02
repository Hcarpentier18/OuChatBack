import { Adress } from '../entity/Adress';
import { createConnection } from "typeorm";
import { express, Router} from 'express';

const AddressRouter = Router();

AddressRouter.get('/getAll', (req, res) => {
    createConnection().then((connection) => {
        const AddressRepository = connection.getRepository(Adress);

        AddressRepository.find().then((addresses) => {
            res.send(addresses);
        });
    }).catch((error) => {
        console.error(error);
    })
})

AddressRouter.post('/insert', (req, res) => {
    let address:Adress = req.query.address;
    console.log("Je suis la");
    // console.log(address.city);
})


export default AddressRouter;
