import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceInput } from './graphql/inputs/invoice.input';
import { Invoice } from './interfaces/invoice.interface';

@Injectable()
export class InvoicesService {
  constructor(@InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>) {}

  async create(createInvoiceData: InvoiceInput): Promise<Invoice> {
    const newInvoice = {...createInvoiceData}
    const createdInvoice = new this.invoiceModel(newInvoice);
    return createdInvoice.save();
  }

  async findAll(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }
}
