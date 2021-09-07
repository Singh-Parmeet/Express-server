import { Request, Response, NextFunction } from 'express';
const users = [
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
class User {
    get(req: Request, res: Response, next: NextFunction) {

        return res.status(200).send({message: 'Users fetched successfully', data: users});
    }
    post(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        if (!name) {
            res.status(400).send ({message: 'User name is required', error: 'Bad Request'});
        }
        return res.status(200).send({message: 'User added successfully'});
    }
    put(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const newUser = users.find((data) => data.name === name);
        if (!newUser) {
            const updateUsers = [...users, {name}];
            return res.status(201).send({message: 'Users added successfully', data: updateUsers});
        }
        return res.status(200).send({message: 'Already exist', data: users});
    }
    del(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const newUser = users.filter((data) => data.name !== name);
        return res.status(201).send({message: 'Users added successfully', data: newUser});
    }



}

export default new User();