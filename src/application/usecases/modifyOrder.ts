import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class ModifyOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: number, quantity: number): Promise<void> {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    order.quantity = quantity;
    await this.orderRepository.save(order);
  }
}