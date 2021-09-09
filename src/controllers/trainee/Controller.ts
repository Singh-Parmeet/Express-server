import { Request, Response, NextFunction } from 'express';
// import { Request } from 'express-validator/src/base';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
const trainee = [
    {
        name: 'Himanshu',
        designation: 'SDE',
        location: 'Noida'
    }, {
        name: 'Rajnish',
        designation: 'SDE I',
        location: 'Greater Noida',
    }, {
        name: 'Balendu',
        designation: 'SDE II',
    },
];
class Trainee {
    get(req: Request, res: Response, next: NextFunction) {

        return res.status(200).send({ message: 'Users fetched successfully', data: trainee });
    }
    create(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            res.status(400).send({ message: 'User name is required', error: 'Bad Request' });
        }
        return res.status(200).send({ message: 'User added successfully' });
    }
    update(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        const newTrainee = trainee.find((data) => data.name === name);
        if (!newTrainee) {
            const updateTrainee = [...trainee, { name }];
            return res.status(201).send({ message: 'Users added successfully', data: updateTrainee });
        }
        return res.status(200).send({ message: 'Already exist', data: trainee });
    }
    delete(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        const newTrainee = trainee.filter((data) => data.name !== name);
        return res.status(201).send({ message: 'Users deleted successfully', data: newTrainee });
    }
    createToken(req: Request, res: Response, next: NextFunction) {
        const token = jwt.sign(req.body, config.secret);
        res.status(200).send({message: 'Token successfully create', data: {token}, status: 'success'});
    }

}

export default new Trainee();