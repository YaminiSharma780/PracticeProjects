import { Module, OnModuleInit } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CartModule,
    ProductsModule,
    AuthModule,
  ],
})
// export class AppModule {}
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log(
      'ServeStaticModule initialized with rootPath:',
      join(__dirname, '..', 'public'),
    );
  }
}
