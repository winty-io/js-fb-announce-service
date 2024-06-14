import {Schema, model} from 'mongoose';

const anuncioSchema = new Schema({
    message: String,
    channelId: String,
    frequency: String,
    lastPosted: { type: Date, default: Date.now }
  });
  
const Anuncio = model('Anuncio', anuncioSchema);
  
export default Anuncio;