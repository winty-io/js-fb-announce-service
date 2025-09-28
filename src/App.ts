
import express, {Express}    from 'express';
import {connect}  from 'mongoose';
import cors       from 'cors';
import morgan     from 'morgan';
import { config } from 'dotenv';
import routes     from './Routes';
import Actuator from './Actuator';
import {logger} from './Logger';
import ErrorHandler from './ErrorHandler';


class App {
  app: Express;
  
  constructor() {
    config();
    this.app = express();
    this.initializeServices()
    this.initializeMiddlewares();
    this.initializeControllers();
  }
  
  private async initializeServices() {
    try {
      await connect(process.env.MONGO_CONNECTION_URI ?? "mongodb://localhost/local");
      logger.info('Conectado ao MongoDB');
    } catch (err) {
      logger.error('Erro ao conectar ao MongoDB:', err);
    }
  }
  
  private initializeMiddlewares(){
    this.app.use(cors());
    this.app.use(morgan('short',{skip: function(req,res){
      return req.path.includes("/actuator/health")
    }}));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(new ErrorHandler().handle);
  }
  
  private initializeControllers(){
    this.app.use(Actuator)
    this.app.use('/', routes);
  }
  
}

export default new App().app;
