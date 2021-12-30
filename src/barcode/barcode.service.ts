import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Barcode, BarcodeDocument } from 'src/schemas/barcode.schema';

@Injectable()
export class BarcodeService {
    constructor(@InjectModel(Barcode.name) private barcodeModel: Model<BarcodeDocument>){}

    async getAll(): Promise<Barcode[]>{
        return await this.barcodeModel.find().exec();
    }

    async getByName(name: string): Promise<Barcode[]>{
        return await this.barcodeModel.find({name: name}).exec();
    }

    async addBarcode(barcode: Barcode): Promise<boolean>{
        const existingBarcode = await this.getByName(barcode.name);
        console.log(existingBarcode)
        if(existingBarcode.length === 0){
            this.barcodeModel.create(barcode);
            return true;
        }
        else{
            return false;
        }
    }

    async getBarcodeByCode(code: string): Promise<Barcode[]>{
        console.log(code)
        return await this.barcodeModel.find({code: code}).exec();
    }
}
