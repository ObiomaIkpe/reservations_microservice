import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto} from "./DTO/create-user.dto";
import { UsersService } from "./users.service";
import { currentUser } from "../decorators/current-user.decorator";
import { UserDocument } from "./models/user.schema";

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Get()
    async getUser(@currentUser() user: UserDocument){
        return user;
    }

}