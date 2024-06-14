import {logger} from './Logger';
import { name, version } from '../package.json';
import app from './App';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Microserviço ${name}:${version} rodando na porta ${PORT}`);
});