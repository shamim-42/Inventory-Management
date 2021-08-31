import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InventoryType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly code: string;

  @Field(() => Int)
  readonly unit_price: number;

  @Field()
  readonly description: string;
}
