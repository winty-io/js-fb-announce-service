import {Router, Request, Response } from 'express';
import Announce from './Announce';

const routes = Router();

routes.post('/anuncios', async (req: Request, res: Response) => {
    try {
      const anuncio = new Announce(req.body);
      await anuncio.save();
      res.status(201).send(anuncio);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  routes.get('/anuncios', async (req: Request, res: Response) => {
    try {
      const anuncios = await Announce.find();
      res.send(anuncios);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  routes.get('/anuncios/:id', async (req: Request, res: Response) => {
    try {
      const anuncio = await Announce.findById(req.params.id);
      if (!anuncio) {
        return res.status(404).send({ message: 'Anúncio não encontrado' });
      }
      res.send(anuncio);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  routes.put('/anuncios/:id', async (req: Request, res: Response) => {
    try {
      const anuncio = await Announce.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!anuncio) {
        return res.status(404).send({ message: 'Anúncio não encontrado' });
      }
      res.send(anuncio);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  routes.delete('/anuncios/:id', async (req: Request, res: Response) => {
    try {
      const anuncio = await Announce.findByIdAndDelete(req.params.id);
      if (!anuncio) {
        return res.status(404).send({ message: 'Anúncio não encontrado' });
      }
      res.send({ message: 'Anúncio deletado' });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
export default routes;