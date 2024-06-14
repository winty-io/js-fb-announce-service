import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpException';
 
class ErrorHandler {
  
  handle(error: HttpException, request: Request, response: Response, next: NextFunction) {
    
    const status = error.status || 500;
    const message = error.message || 'Um Erro interno ocorreu! por favor, entre em contato com o administrador.';
    
    response
      .status(status)
      .send({
        status,
        message,
      })
  }
}

export default ErrorHandler;