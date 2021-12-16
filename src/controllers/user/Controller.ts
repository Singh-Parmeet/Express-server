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
    getMe = async(req: Request, res: Response, next: NextFunction) => {
        try {
          let token = req.header('Authorization');
          if (token.startsWith ('Bearer ')) {
            token = token.substring(7, token.length);
        }
          const { secret } = config;
          let user: any = {} ;
          user = jwt.verify(token, secret);
          const userdata = await this.userRepository.findOne({ _id: user._id });
          res.status(200).send({userdata, message: 'User Fetched', status: 'success'});
        } catch (err) {
          res.status(403).send({message: 'User Fetch failed', status: 'error'});
        }
      }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skip  = Number(req.query.skip) || 0;
            const limit = Number(req.query.limit) || 10;
            const { search = '' } = req.query;

            const data = await this.userRepository.find({search, limit, skip});
            const total = await this.userRepository.count();
            res.status(200).json({ data , total, status: 'success' });
        } catch (error) {
            res.status(403).send({message: 'User not found', status: 'error'});
        }
    }
    // Create data
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, role, email} = req.body;
             bcrypt.genSalt(constant.BCRYPT_SALT_ROUNDS, (_err, salt) => {
                bcrypt.hash(config.password, salt, async (err: any, hash) => {
                    const data = await this.userRepository.create({name, role, password: hash, email});
                    res.status(200).json({ data, message: 'User added successfully',  count: this.userRepository.count, status: 'success'});
                });
            });
                }   catch (error) {
                    res.status(403).send({message: 'User not created', status: 'error'});
                }
    }
    // Update data
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.updated(req.body);
            res.status(200).json({ data, message: 'User updated successfully', count: this.userRepository.count, status: 'success'});
        } catch (error) {
            res.status(403).send({message: 'User not updated', status: 'error'});
        }
    }
    // Delete data
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.userRepository.delete(req.body.originalId);
            res.status(200).json({ data, message: 'User deleted successfully', count: this.userRepository.count, status: 'success' });
        } catch (error) {
            res.status(403).send({message: 'User not deleted', status: 'error'});
        }

    }
    // Comparing the passwords
    Hashmatch = async ( data: any) => {
        const validatePassword = await this.userRepository.findOne({email: data.email});
        const match = await bcrypt.compare(data.password, validatePassword.password);
        if (match) {
            return validatePassword;
        } else {
            throw new Error ('Password not match');
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
            res.status(403).send({message: 'Invalid Login Credentials', status: 'error'});
        }
    }
    review = async (req: Request, res: Response , next: NextFunction) => {
        try {
            const permission = await this.userRepository.findOne({originalId: req.body.originalId});
            if (permission.role === 'trainee') {
            const data = await this.userRepository.review(req.body);
            return  res.status(200).json({ data, message: 'review added successfully', count: this.userRepository.count});
        } else {
            throw new Error ('User is not trainee');
        }
    } catch (err) {
            return res.status(403).json({message: 'Failed user is not trainee', status: 'error'});
        }

    }
}
export default new User();