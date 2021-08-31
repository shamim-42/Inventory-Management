import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './customers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
    ]),
  ],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
