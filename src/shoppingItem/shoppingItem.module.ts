import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ShoppingItemSchema } from "src/schemas/shoppingItem.schema";
import { ShoppingItemController } from "./shoppingItem.controller";
import { ShoppingItemService } from "./shoppingItem.service";

@Module({
    providers: [ShoppingItemService],
    controllers: [ShoppingItemController],
    imports: [MongooseModule.forFeature([{name: "ShoppingItem", schema: ShoppingItemSchema}])]
})
export class ShoppingItemModule{

}