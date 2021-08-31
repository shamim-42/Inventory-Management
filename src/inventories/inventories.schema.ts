import * as mongoose from 'mongoose';

export const InventorySchema = new mongoose.Schema({
  name: String,
  code: String,
  unit_price: Number,
  description: String,
});
