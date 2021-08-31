import { ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { CustomerSchema } from 'src/customers/customers.schema';

export const InvoiceItemsSchema = new mongoose.Schema({
    name: String,
    code: String,
    unit_price: Number,
    description: String,
    qty: Number,
  });
  
