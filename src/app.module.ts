import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoriesModule } from './inventories/inventories.module';
// import { UsersModule } from '../backup/users/users.module';
import { InvoicesModule } from './invoices/invoices.module';
import { CustomersModule } from './customers/customers.module';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({req})=>({req})  // added later 
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    // UsersModule,
    AuthModule,
    InvoicesModule,
    InventoriesModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
