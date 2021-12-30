import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async getUserByUsername(username: string): Promise<User>{
        const user = await this.userModel.findOne({username: username}).exec();
        if(user){
            return user;
        }
        else{
            return null;
        }
    }

    async addUser(user: User): Promise<User>{
        await this.userModel.create(user);
        return user;
    }
}