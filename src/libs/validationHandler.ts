import { Request, Response, NextFunction } from 'express';

// tslint:disable-next-line: no-var-requires
const { checkSchema, validationResult } = require ('express-validator');

const validationHandler = (validator: any) => {
  return [
    checkSchema(validator),
    (req: Request, res: Response, next: NextFunction) => {
      // console.log(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        next({ message: 'Bad Request', status: 422, error: errors.array() });
      }
      next();
    },
  ];
};

export default validationHandler;