import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express from 'express';
import Config from '../config';
import { Photo } from './entity/Photo';
import AddressRouter from './routes/Address.route';

const app = express();


// createConnection().then(connection => {
//
//     let photoRepository = connection.getRepository(Photo);
//
//     // let photo = new Photo();
//     // photo.path = "/photos2";
//
//     // photoRepository.save(photo).then(response => {
//     //     console.log("Normalement c'est sauvegardé !");
//     // });
//
//     // photoRepository.find().then((photos) => {
//     //     photos.forEach((photo, index) => {
//     //         console.log(index, photo.path);
//     //     });
//     // });
//
//     // photoRepository.findOne({path: "/photos"}).then((photo) => {
//     //     console.log(photo);
//     // })
//
//     // photoRepository.findOne(1).then((photoToRemove) => {
//     //     photoRepository.remove(photoToRemove);
//     // });
//
//     // here you can start to work with your entities
// }).catch(error => console.log(error));
//


app.use("/adresses", AddressRouter);


app.listen(Config.port, () => {
    return console.log(`Server is listening on ${Config.port}`);
});


// createConnection().then(async connection => {
//
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
//
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
//
//     console.log("Here you can setup and run express/koa/any other framework.");
//
// }).catch(error => console.log(error));
