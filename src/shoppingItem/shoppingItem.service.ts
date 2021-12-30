import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ShoppingItem, ShoppingItemDocument } from "src/schemas/shoppingItem.schema";

@Injectable()
export class ShoppingItemService{
    constructor(@InjectModel(ShoppingItem.name) private shoppingItemModel: Model<ShoppingItemDocument>){}

    async getAll(owner: string): Promise<ShoppingItem[]>{
        return await this.shoppingItemModel.find({owner: owner}).exec();
    }

    async deleteShoppingItemByName(params: {name: string, owner: string}){
        await this.shoppingItemModel.deleteOne({name: params.name, owner: params.owner}).exec();
    }

    async addShoppingItem(shoppingItem: ShoppingItem): Promise<ShoppingItem>{
        return await this.shoppingItemModel.create(shoppingItem);
    }
}