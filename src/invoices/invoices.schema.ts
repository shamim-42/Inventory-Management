import { ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { CustomerSchema } from 'src/customers/customers.schema';
import { CustomerInput } from 'src/customers/graphql/inputs/customer.input';
import { InventorySchema } from 'src/inventories/inventories.schema';
import { CustomerInputForInvoice } from './graphql/inputs/customer.input';

export const InvoiceSchema = new mongoose.Schema(
  {
    total_amount: Number,
    number_of_product: Number,
    customer: CustomerSchema,
    invoice_items: [InventorySchema],
  },
  { timestamps: true },
);
