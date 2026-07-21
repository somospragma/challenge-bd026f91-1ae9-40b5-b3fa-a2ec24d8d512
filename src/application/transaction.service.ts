import { Injectable } from '@nestjs/common';
import { Transaction } from '../domain/transaction';
import { TransactionRepository } from '../infrastructure/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async createTransaction(amount: number): Promise<Transaction> {
    const transaction = new Transaction(Date.now().toString(), amount, new Date(), 'pending');
    await this.transactionRepository.save(transaction);
    return transaction;
  }
}