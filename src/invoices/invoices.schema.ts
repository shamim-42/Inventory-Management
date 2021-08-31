import { ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { CustomerSchema } from 'src/customers/customers.schema';
import { InvoiceItemsSchema } from './invoiceitems.schema';

export const InvoiceSchema = new mongoose.Schema(
  {
    total_amount: Number,
    number_of_product: Number,
    customer: CustomerSchema,
    invoice_items: [InvoiceItemsSchema],
  },
  { timestamps: true },
);
