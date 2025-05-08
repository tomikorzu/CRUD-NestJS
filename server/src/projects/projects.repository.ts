import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.project.findMany();
  }

  create(project: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({
      data: project,
    });
  }

  updateOne(project: Prisma.ProjectUpdateInput, id: string) {
    return this.prisma.project.update({
      data: project,
      where: { id },
    });
  }

  removeOne(id: string) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
