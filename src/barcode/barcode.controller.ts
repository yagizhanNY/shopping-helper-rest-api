import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Barcode } from 'src/schemas/barcode.schema';
import { BarcodeService } from './barcode.service';

@Controller('barcode')
export class BarcodeController {
    
    constructor(private barcodeService: BarcodeService){}
    
    @Get('getall')
    getAllBarcodeItems(){
        return this.barcodeService.getAll();
    }

    @Post('add')
    async addBarcode(@Body() barcode: Barcode, @Res() res: Response){

        const result = await this.barcodeService.addBarcode(barcode);
        console.log(result);

        if(result){
            res.status(HttpStatus.OK).send();
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Get('get/:code')
    async getBarcodeByCode(@Param() params){
        return await this.barcodeService.getBarcodeByCode(params.code);
    }
}
