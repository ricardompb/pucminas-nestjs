import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CadastroModule } from './cadastro/cadastro.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), CadastroModule, AuthModule, UsersModule],
})
export class AppModule {}
