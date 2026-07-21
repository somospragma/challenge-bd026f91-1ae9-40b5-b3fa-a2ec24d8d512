import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class CancelOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: number): Promise<void> {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    order.status = 'cancelled';
    await this.orderRepository.save(order);
  }
}