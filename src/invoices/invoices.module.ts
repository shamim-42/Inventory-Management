import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './invoices.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './invoices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Invoice',
        schema: InvoiceSchema,
      },
    ]),
  ],
  providers: [InvoicesService, InvoicesResolver],
})
export class InvoicesModule {}
