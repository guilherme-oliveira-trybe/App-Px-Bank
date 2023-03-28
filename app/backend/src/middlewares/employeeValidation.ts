import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const employeeValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    cpf: Joi.string().length(11).required(),
    salary: Joi.number().min(1).required(),
    dateOfBirth: Joi.date().iso().required(),
    departmentId: Joi.number().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next()
};

export default employeeValidation;