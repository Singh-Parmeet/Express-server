import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class User {
    // Read-All
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const data = await userRepository.find({});
          console.log('data', typeof data);
          res.status(200).json({ data, count: data.length });
        } catch (err) {
          console.log(err);
        }
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, password, email} = req.body;
            const data = await userRepository.create({name, role, password, email});
            console.log('data', typeof data);
            res.status(200).json({ data, count: userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, password, email} = req.body;
            const data = await userRepository.update({name, role, password, email});
            console.log('data', typeof data);
            res.status(200).json({ data, count: userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, password, email} = req.body;
            const data = await userRepository.delete({name, role, password, email});
            console.log('data', typeof data);
            res.status(200).json({ data, count: userRepository.count });
        } catch (err) {
            console.log(err);
        }

    }
    createToken(req: Request, res: Response, next: NextFunction) {
        const token = jwt.sign(req.body, config.secret);
        res.status(200).send({message: 'Token successfully create', data: {token}, status: 'success'});
    }

}

export default new User();