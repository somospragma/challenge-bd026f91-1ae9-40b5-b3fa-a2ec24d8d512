import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(productId: string, quantity: number): Promise<void> {
    const order = new Order();
    order.productId = productId;
    order.quantity = quantity;
    order.status = 'pending';
    await this.orderRepository.save(order);
  }
}