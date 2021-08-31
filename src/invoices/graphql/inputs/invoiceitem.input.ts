import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InvoiceItemsInput {
  @Field()
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly code: string;

  @Field(() => Int)
  readonly unit_price: number;

  @Field()
  readonly description: string;

  @Field(()=>Int)
  readonly qty: number;
}
