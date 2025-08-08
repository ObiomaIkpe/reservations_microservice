
import { ConfigService } from "@nestjs/config";
import {PassportStrategy} from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "../users/users.service";
import { Request } from "express";
import { TokenPayload } from "../interfaces/token-payload.interfaces";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        configService: ConfigService, 
        private readonly userService: UsersService
    ) {
        super({
        jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
            console.log(request)
            return request?.cookies?.Authentication || request?.Authentication
        }
        ]),        
        secretOrKey: configService.get("JWT_SECRET") as string,    
        });        
    }

    async validate({userId}: TokenPayload) {
        return this.userService.getUser({_id: userId})
    }

}