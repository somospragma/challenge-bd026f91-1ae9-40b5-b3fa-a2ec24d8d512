import { Injectable } from '@nestjs/common';
import { Transaction } from '../domain/transaction';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {}

  async save(transaction: Transaction): Promise<void> {
    await this.transactionRepository.save(transaction);
  }
}