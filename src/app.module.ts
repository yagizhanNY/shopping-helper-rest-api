import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarcodeController } from './barcode/barcode.controller';
import { BarcodeModule } from './barcode/barcode.module';
import { ShoppingItemModule } from './shoppingItem/shoppingItem.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BarcodeModule,
    MongooseModule.forRoot(process.env.MONGO_PATH),
    UserModule,
    ShoppingItemModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
