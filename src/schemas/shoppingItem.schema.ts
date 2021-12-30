import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ShoppingItemDocument = ShoppingItem & Document;

@Schema({timestamps: false, versionKey: false})
export class ShoppingItem{
    @Prop({required: true})
    name: string

    @Prop({required: true})
    quantity: number

    @Prop({required: true, default: false})
    isChecked: boolean

    @Prop({required: true})
    owner: string
}

export const ShoppingItemSchema = SchemaFactory.createForClass(ShoppingItem);