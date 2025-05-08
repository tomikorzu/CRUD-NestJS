import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}

  findAll() {
    return this.projectsRepository.findAll();
  }

  async create(project: Prisma.ProjectCreateInput) {
    if (!project.name) throw new Error('Project name is required');
    const res = await this.projectsRepository.create(project);
    if (!res) throw new Error('There was an error creating the project');
    return res;
  }

  updateOne(project: Prisma.ProjectUpdateInput, id: string) {
    return this.projectsRepository.updateOne(project, id);
  }

  removeOne(id: string) {
    return this.projectsRepository.removeOne(id);
  }
}
