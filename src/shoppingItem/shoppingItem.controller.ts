import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { ShoppingItem } from "src/schemas/shoppingItem.schema";
import { ShoppingItemService } from "./shoppingItem.service";

@Controller('shopping')
export class ShoppingItemController{
    constructor(private shoppingItemService: ShoppingItemService){}
    
    @Get('/:owner')
    async getAll(@Res() res: Response, @Param('owner') owner: string){
        const shoppingItems = await this.shoppingItemService.getAll(owner);
        res.send(shoppingItems);
    }

    @Delete('/:name/:owner')
    async deleteShoppingItemByName(@Res() res: Response, @Param() params: {name: string, owner: string}){
        try{
            await this.shoppingItemService.deleteShoppingItemByName(params);
            res.send(HttpStatus.OK);
        }
        catch{
            res.send(HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async addShoppingItem(@Body() shoppingItem: ShoppingItem, @Res() res: Response){
        const addedShoppingItem = await this.shoppingItemService.addShoppingItem(shoppingItem);
        res.send(addedShoppingItem);
    }
}