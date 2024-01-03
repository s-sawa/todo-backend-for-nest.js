import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodosModel } from '@/models/todos.model'
import { TodosService } from '@/services/todos.service'
import { TodosController } from '@/controllers/todos.controllers'

@Module({
  imports: [TypeOrmModule.forFeature([TodosModel])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
