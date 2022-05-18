import { Router } from 'express';
import{Ad} from '../entity/Ad';

const AdRouter = Router();

AdRouter.post('/annonce', async (req, res) => {
  const{
    type,
    date
  }=req.body

  const ad=Ad.create({
    type: type,
    date: date,
  })
    await ad.save();

    return res.json(ad)
});
export default AdRouter;
