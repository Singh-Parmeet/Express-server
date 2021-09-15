import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';

class User {
     userRepository = new UserRepository();
    // Read-All
    userRepository = new UserRepository();
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const data = await this.userRepository.find({});
          console.log('data', typeof data);
          res.status(200).json({ data, count: data.length });
        } catch (err) {
          console.log(err);
        }
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, password, email} = req.body;
            const data = await this.userRepository.create({name, role, password, email});
            console.log('data', typeof data);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.body;
            const data = await this.userRepository.update({id});
            console.log('data', typeof data);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.body;
            const data = await this.userRepository.delete({id});
            console.log('data', typeof data);
            res.status(200).json({ data, count: this.userRepository.count });
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