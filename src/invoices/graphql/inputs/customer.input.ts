import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CustomerInputForInvoice{
    @Field()
    readonly id: string;

    @Field()
    readonly name: string;

    @Field()
    readonly mobile: string;

    @Field()
    readonly address: string;
}