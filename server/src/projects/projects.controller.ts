import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Prisma } from '@prisma/client';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Post()
  create(@Body() project: Prisma.ProjectCreateInput) {
    return this.projectsService.create(project);
  }

  @Patch(':id')
  update(@Body() project: Prisma.ProjectUpdateInput, @Param('id') id: string) {
    return this.projectsService.updateOne(project, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.removeOne(id);
  }
}
