import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserDocument } from "./models/users.schema";

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
    return context.switchToHttp().getRequest().user;
}

export const currentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => getCurrentUserByContext(context)
)