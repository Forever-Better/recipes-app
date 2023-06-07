import { Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }

  update(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        image: dto.image,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
    });
  }

  softDelete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
