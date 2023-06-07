import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, recipeId: string) {
    const findBookmark = await this.prisma.bookmark.findFirst({ where: { userId, recipeId } });
    if (findBookmark) throw new BadRequestException('Вы уже добавили рецепт в закладки.');

    return this.prisma.bookmark.create({ data: { userId: userId, recipeId: recipeId } });
  }

  findAll() {
    return `This action returns all bookmark`;
  }

  async findOne(userId: string, recipeId: string) {
    const { id } = await this.prisma.bookmark.findFirst({ where: { recipeId, userId } });
    return id;
  }

  async remove(userId, recipeId: string) {
    const { id } = await this.prisma.bookmark.findFirst({ where: { recipeId, userId } });

    return this.prisma.bookmark.delete({ where: { id } });
  }
}
