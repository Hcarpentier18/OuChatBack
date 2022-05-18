import { Router } from 'express';
import{Animal} from '../entity/Animal';

const AnimalRouter = Router();

AnimalRouter.post('/animal', async (req, res) => {
  const{
    name,
    specie, 
    race,
    color,
    description,
    situation,
    chip
  }=req.body

  const animal=Animal.create({
    name:name ,
    specie:specie, 
    race:race,
    color:color,
    description:description,
    situation:situation,
    chip:chip
  })
    await animal.save();

    return res.json(animal)
});

export default AnimalRouter;