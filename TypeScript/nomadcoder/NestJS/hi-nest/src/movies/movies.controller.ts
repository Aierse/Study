import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll()
    }

    @Get('/:id')
    getOne(@Param('id') moiveId: number): Movie {
        return this.moviesService.getOne(moiveId)
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData)
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId)
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData) {
        return this.moviesService.update(movieId, updateData)
    }
}