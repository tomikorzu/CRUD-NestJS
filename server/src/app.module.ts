import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [PrismaModule, UsersModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
