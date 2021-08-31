import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoicesService } from './invoices.service';
import { InvoiceType } from './graphql/dto/invoice.dto';
import { InvoiceInput } from './graphql/inputs/invoice.input';
import { GraphqlPassportAuthGuard } from 'src/auth/graphql-passport-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class InvoicesResolver {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [InvoiceType])
  @UseGuards(new GraphqlPassportAuthGuard(['ADMIN', 'MERCHANT'])) // only admin and merchant can make mutation
  async invoices() {
    return this.invoicesService.findAll();
  }

  @Mutation(() => InvoiceType)
  @UseGuards(new GraphqlPassportAuthGuard(['ADMIN'])) // only admin can make mutation
  async createInvoice(@Args('input') input: InvoiceInput) {
    return this.invoicesService.create(input);
  }
}
