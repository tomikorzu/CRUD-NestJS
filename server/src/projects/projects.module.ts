import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectsRepository } from './projects.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository, PrismaService],
})
export class ProjectsModule {}
