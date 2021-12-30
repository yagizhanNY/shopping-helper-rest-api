import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({timestamps: false, versionKey: false})
export class User{
    @Prop({required: true})
    username: string

    @Prop({required: true, unique: true})
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);