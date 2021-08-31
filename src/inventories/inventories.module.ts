import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesResolver } from './inventories.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {InventorySchema } from './inventories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Inventory',
        schema: InventorySchema,
      },
    ]),
  ],
  providers: [InventoriesService, InventoriesResolver],
})
export class InventoriesModule {}
