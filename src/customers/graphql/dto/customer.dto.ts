import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly mobile: string;

  @Field()
  readonly address: string;
}
