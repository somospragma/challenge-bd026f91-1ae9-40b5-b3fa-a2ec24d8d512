import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../domain/transaction';
import { TransactionService } from '../application/transaction.service';
import { TransactionRepository } from '../infrastructure/transaction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [TransactionService, TransactionRepository],
})
export class AppModule {}