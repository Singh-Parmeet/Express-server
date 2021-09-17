import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import * as constant from '../../../extraTS/constants';

const userRepository = new UserRepository();
class User {
    // Read-All
    //  userRepository = new UserRepository();
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
            const {name, role, email} = req.body;
             bcrypt.genSalt(constant.BCRYPT_SALT_ROUNDS, (err, salt) => {
                bcrypt.hash(config.password, salt, async (hash) => {
                    const data = await userRepository.create({name, role, password: hash, email});
                    res.status(200).json({ data, count: userRepository.count});
                });
            });
                }   catch (err) {
                    console.log(err);
                }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await userRepository.updated(req.body);
            res.status(200).json({ data, count: userRepository.count()});
        } catch (err) {
            console.log(err);
        }
    }
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await userRepository.delete(req.body);
            console.log('data', typeof data);
            res.status(200).json({ data, count: userRepository.count });
        } catch (err) {
            console.log(err);
        }

    }

    Hashmatch = async ( data: any) => {
        const userFound = await userRepository.findOne({email: data.email});
        const received: any = {...userFound};
        const match = await bcrypt.compare(data.password, received.password);
        if (match) {
            return userFound;
        } else {
            console.log('match not found');
        }
    }
    createToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userFound = await this.Hashmatch(req.body);
            if (userFound) {
                const token = await jwt.sign(req.body, config.secret, { expiresIn: '15m' });
                res.status(200).send({message: 'Token successfully create', data: {token}, status: 'success'});
            } else {
                console.log('User not found');
            }
        } catch (err) {
            console.log(err);

        }


    }

}

export default new User();