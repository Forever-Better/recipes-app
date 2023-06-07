import { UseGuards, Post, Request, Get, Delete, Param, Controller } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('recipes/:id/bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Param('id') postId: string) {
    return this.bookmarkService.create(req.user.id, postId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.bookmarkService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findOne(@Request() req, @Param('id') postId: string) {
    return this.bookmarkService.findOne(req.user.id, postId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  remove(@Request() req, @Param('id') postId: string) {
    return this.bookmarkService.remove(req.user.id, postId);
  }
}
