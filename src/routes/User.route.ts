import { Router } from 'express';
import{User} from '../entity/User';

const UserRouter = Router();

UserRouter.get('/getuser',(req,res) =>{
  res.json(User)
})

UserRouter.post('/register', async (req, res) => {
  const{
      pseudo,
      mail,
      password
  }=req.body

  const user=User.create({
    pseudo:pseudo,
    mail:mail,
    password:password
  })
    await user.save();

    return res.json(user)
});

export default UserRouter;