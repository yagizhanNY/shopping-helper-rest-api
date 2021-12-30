import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BarcodeSchema } from 'src/schemas/barcode.schema';
import { BarcodeController } from './barcode.controller';
import { BarcodeService } from './barcode.service';

@Module({
  providers: [BarcodeService],
  controllers: [BarcodeController],
  imports: [MongooseModule.forFeature([{name: "Barcode", schema: BarcodeSchema}])]
})
export class BarcodeModule {}
