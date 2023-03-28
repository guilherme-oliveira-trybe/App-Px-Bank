import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const departmentValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    department: Joi.string().not().empty().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next()
};

export default departmentValidation;