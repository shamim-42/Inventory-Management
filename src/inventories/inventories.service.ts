import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InventoryInput } from './graphql/inputs/inventory.input';
import { Inventory } from './interfaces/inventory.interface';

@Injectable()
export class InventoriesService {
  constructor(
    @InjectModel('Inventory') private readonly inventoryModel: Model<Inventory>,
  ) {}

  async create(createInventoryDto: InventoryInput): Promise<any> {
    const createdInventory = new this.inventoryModel(createInventoryDto);
    return createdInventory.save();
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }
}
