import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';
import { TesteService } from './teste/teste.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';
// ES7 Decorators - EcmaScript 7 javascript
@Module({
  imports: [
    OrdersModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, '..', 'database.sqlite'),
      models: [Order],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController, TesteController],
  providers: [AppService, TesteService], //container de serviços
})
export class AppModule {}
