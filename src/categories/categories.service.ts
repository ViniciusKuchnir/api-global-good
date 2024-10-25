import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryExists = await this.categoryRepo.findOneBy({
      name: createCategoryDto.name,
    });

    if (categoryExists) {
      throw new ConflictException('Category already exists');
    }

    const category = this.categoryRepo.create(createCategoryDto);
    return await this.categoryRepo.save(category);
  }

  // Método ajustado para retornar as categorias
  async findAll() {
    return await this.categoryRepo.find(); // Retorna todas as categorias em formato JSON
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    // Verificar se a categoria existe
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) {
      throw new ConflictException('Category not found');
    }

    // Verificar se o nome atualizado já existe para outra categoria
    if (updateCategoryDto.name) {
      const nameExists = await this.categoryRepo.findOneBy({
        name: updateCategoryDto.name,
      });

      if (nameExists && nameExists.id !== id) {
        throw new ConflictException('Another category with this name already exists');
      }
    }

    // Atualizar a categoria com os novos valores
    this.categoryRepo.merge(category, updateCategoryDto);
    return await this.categoryRepo.save(category);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
