import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CustomerType } from 'src/customers/graphql/dto/customer.dto';
import { InvoiceItemsType } from './invoiceitems.dto';

@ObjectType()
export class InvoiceType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly total_amount: number;

  @Field(() => Int)
  readonly number_of_product: number;

  @Field(type => CustomerType, { nullable: true })
  readonly customer: CustomerType;

  @Field(type => [InvoiceItemsType], { nullable: true })
  readonly invoice_items: InvoiceItemsType[];
}
