import UserRepository from '../repositories/user/UserRepository';
import config  from '../../src/config/configuration';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
      .then(res => {
          if (res === 0) {
              console.log('Data seeding in progress');
              userRepository.create({
                name: 'Hima',
                role: 'head-trainer',
                email: 'head.trainer@successive.tech',
                password: config.password});
              userRepository.create({
                name: 'Trainer',
                role: 'trainer',
                email: 'trainer@successive.tech',
                password: config.password });
            }
    }).catch(err => console.log(err));

};