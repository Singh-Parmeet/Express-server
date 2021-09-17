import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import * as constant from '../../../extraTS/constants';
class User {
    private userRepository: UserRepository;
    public constructor() {
        this.userRepository = new UserRepository();
    }
    // Read-All
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const data = await this.userRepository.find({});
          console.log('data', typeof data);
          res.status(200).json({ data, count: data.length });
        } catch (err) {
          console.log(err);
        }
    }
    // Create data
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, email} = req.body;
             bcrypt.genSalt(constant.BCRYPT_SALT_ROUNDS, (_err, salt) => {
                bcrypt.hash(config.password, salt, async (err: any, hash) => {
                    const data = await this.userRepository.create({name, role, password: hash, email});
                    res.status(200).json({ data, count: this.userRepository.count});
                });
            });
                }   catch (err) {
                    console.log(err);
                }
    }
    // Update data
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.updated(req.body);
            res.status(200).json({ data, count: this.userRepository.count});
        } catch (err) {
            console.log(err);
        }
    }
    // Delete data
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.delete(req.body);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (err) {
            console.log(err);
        }

    }
    // Comparing the passwords
    Hashmatch = async ( data: any) => {
        const userFound = await this.userRepository.findOne({email: data.email});
        const received: any = {...userFound};
        const match = await bcrypt.compare(data.password, received.password);
        if (match) {
            return userFound;
        } else {
            console.log('match not found');
        }
    }
    // Once password match token can be used
    createToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userFound = await this.Hashmatch(req.body);
            if (userFound) {
                const signal = {_id: userFound._id, email: userFound.email};
                const token = await jwt.sign(signal, config.secret, { expiresIn: '15m' });
                res.status(200).send({message: 'Token successfully create', data: {token}, status: 'success'});
            } else {
                  res.status(403).send({message: 'Password not found', status: 'Failure'});
            }
        } catch (err) {
            res.status(403).send({message: 'Password not found', status: 'Failure'});
            console.log(err);
        }
    }
}
export default new User();