import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { currentUser } from './users/current-user.decorator';
import { UserDocument } from './users/models/users.schema';
import type { Response } from 'express';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@currentUser() user: UserDocument,
              @Res({passthrough: true}) response: Response
  ) {
    await this.authService.login(user, response);
    response.send(user)
  }

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
