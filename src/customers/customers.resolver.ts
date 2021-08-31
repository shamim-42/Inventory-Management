import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CustomerType } from './graphql/dto/customer.dto';
import { CustomerInput } from './graphql/inputs/customer.input';

@Resolver('Customers')
export class CustomersResolver {
    constructor(private readonly customersService: CustomersService){}

    @Query(()=> [CustomerType])
    async customer(){
        return this.customersService.findAll();
    }

    @Mutation(()=>CustomerType)
    async createCustomer(@Args('input') input: CustomerInput){
        return this.customersService.create(input)
    }
}
