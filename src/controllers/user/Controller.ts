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
          res.status(200).json({ data, count: data.length });
        } catch (error) {
            res.status(403).send({message: 'User not found', status: 'Failure'});
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
                }   catch (error) {
                    res.status(403).send({message: 'User not created', status: 'Failure'});
                }
    }
    // Update data
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.updated(req.body);
            res.status(200).json({ data, count: this.userRepository.count});
        } catch (error) {
            res.status(403).send({message: 'User not updated', status: 'Failure'});
        }
    }
    // Delete data
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.delete(req.body);
            res.status(200).json({ data, count: this.userRepository.count });
        } catch (error) {
            res.status(403).send({message: 'User not deleted', status: 'Failure'});
        }

    }
    // Comparing the passwords
    Hashmatch = async ( data: any) => {
        const validatePassword = await this.userRepository.findOne({email: data.email});
        const match = await bcrypt.compare(data.password, validatePassword.password);
        if (match) {
            return validatePassword;
        } else {
            throw new Error ('Password do not match with database');
        }
    }
    // Once password match token can be used
    createToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatePassword = await this.Hashmatch(req.body);
            if (validatePassword) {
                const signal = {_id: validatePassword._id, email: validatePassword.email};
                const token = await jwt.sign(signal, config.secret, { expiresIn: '15m' });
                res.status(200).send({message: 'Token successfully create', data: {token}, status: 'success'});
            }
        } catch (error) {
            res.status(403).send({message: 'Password not found', status: 'Failure'});
        }
    }
}
export default new User();