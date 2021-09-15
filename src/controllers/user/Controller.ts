import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';

class User {
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
            const data = await this.userRepository.create(req.body);
            console.log('data', typeof data);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.updated(req.body);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (err) {
            console.log(err);
        }
    }
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.delete(req.body);
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