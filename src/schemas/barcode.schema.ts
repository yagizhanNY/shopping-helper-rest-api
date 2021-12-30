import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BarcodeDocument = Barcode & Document;

@Schema({timestamps: true, versionKey: false})
export class Barcode{
    @Prop({required: true})
    name: string

    @Prop({required: true, unique: true})
    code: string
}

export const BarcodeSchema = SchemaFactory.createForClass(Barcode);