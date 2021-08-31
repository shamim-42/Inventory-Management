import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceItemsType {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly code: string;

  @Field(() => Int)
  readonly unit_price: number;

  @Field()
  readonly description: string;

  @Field(() => Int)
  readonly qty: number;
}
