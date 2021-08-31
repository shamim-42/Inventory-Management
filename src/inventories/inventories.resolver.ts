import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InventoriesService } from './inventories.service';
import { InventoryType } from './graphql/dto/inventory.dto';
import { InventoryInput } from './graphql/inputs/inventory.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GraphqlPassportAuthGuard } from 'src/auth/graphql-passport-auth.guard';
import { Roles } from 'src/shared/decorators';

@Resolver()
export class InventoriesResolver {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  // @Roles('ADMIN')
  @Query(() => [InventoryType])
  // @UseGuards(GraphqlPassportAuthGuard)
  @UseGuards(new GraphqlPassportAuthGuard(['ADMIN', 'MERCHANT'])) // only admin and merchant can make query
  async inventory() {
    return this.inventoriesService.findAll();
  }


  @UseGuards(new GraphqlPassportAuthGuard(['ADMIN'])) // only admin can make mutation
  @Mutation(() => InventoryType)
  async createInventories(@Args('input') input: InventoryInput) {
    return this.inventoriesService.create(input);
  }
}
