import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../config/configuration';
import { BCRYPT_SALT_ROUNDS } from '../../extraTS/constants';

const userRepository: UserRepository = new UserRepository();
export default async() => {
    await userRepository.count()
    .then(res => {

        if (!res) {
            console.log('Data seeding in progress');
            const salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
            const hash = bcrypt.hashSync(config.password, salt);
            userRepository.create({
                name: 'Head Trainer',
                role: 'head-trainer',
                email: 'head.trainer@successive.tech',
                password: hash
              });

        }
    }).catch(err => (err));
};
