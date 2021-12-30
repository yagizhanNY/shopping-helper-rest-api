import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { response, Response } from "express";
import { User } from "src/schemas/user.schema";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor(private userService: UserService){}

    @Get('/:username')
    async getUser(@Param('username') username: string, @Res() res: Response){
        const user = await this.userService.getUserByUsername(username);

        if(user){
            res.send(user);
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    async addUser(@Body() user: User, @Res() res: Response){
       const addUser = await this.userService.addUser(user);
       res.send(addUser);
    }
}