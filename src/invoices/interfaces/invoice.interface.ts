import { Document } from 'mongoose';
import { Customer } from 'src/customers/interfaces/customer.interface';

export interface Invoice extends Document {
  readonly total_amount: string;
  readonly number_of_product: number;
  readonly customer: string;
}
