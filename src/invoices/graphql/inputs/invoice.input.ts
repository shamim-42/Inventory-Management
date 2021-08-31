import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { CustomerInputForInvoice } from './customer.input';
import { InvoiceItemsInput } from './invoiceitem.input';

@InputType()
export class InvoiceInput {
  @Field()
  readonly total_amount: number;

  @Field(() => Int)
  readonly number_of_product: number;

  @Field(type => CustomerInputForInvoice)
  customer: CustomerInputForInvoice;

  @Field(type => [InvoiceItemsInput])
  invoice_items: InvoiceItemsInput[];
}