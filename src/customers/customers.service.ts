import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerInput } from './graphql/inputs/customer.input';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async create(createCustomerData: CustomerInput): Promise<any> {
    const createdCustomer = new this.customerModel(createCustomerData);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }
}
