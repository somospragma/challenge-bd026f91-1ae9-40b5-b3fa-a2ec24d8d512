import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: number): Promise<Order | undefined> {
    return this.orders.find(order => order.id === id);
  }
}