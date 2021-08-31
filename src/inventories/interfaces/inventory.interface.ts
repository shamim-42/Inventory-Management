import { Document } from 'mongoose';

export interface Inventory extends Document {
  readonly name: string;
  readonly code: string;
  readonly unit_price: number;
  readonly description: string;
}