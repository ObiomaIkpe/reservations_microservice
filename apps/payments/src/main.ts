import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PaymentsModule, {
    transport: WebTransport.TCP,
    
  })
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
