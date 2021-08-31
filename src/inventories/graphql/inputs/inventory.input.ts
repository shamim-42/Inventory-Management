import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InventoryInput {
  @Field()
  readonly name: string;

  @Field()
  readonly code: string;

  @Field(() => Int)
  readonly unit_price: number;

  @Field()
  readonly description: string;
}
