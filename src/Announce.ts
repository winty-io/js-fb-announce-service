import {Schema, model} from 'mongoose';

const anuncioSchema = new Schema({
    message: String,
    channelId: String,
    frequency: String,
    lastPosted: { type: Date, default: Date.now }
  });
  
const Announce = model('Anuncio', anuncioSchema);
  
export default Announce;