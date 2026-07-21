import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { CreateOrderUseCase } from '../usecases/createOrder';
import { ModifyOrderUseCase } from '../usecases/modifyOrder';
import { CancelOrderUseCase } from '../usecases/cancelOrder';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly modifyOrderUseCase: ModifyOrderUseCase,
    private readonly cancelOrderUseCase: CancelOrderUseCase
  ) {}

  @Post()
  async createOrder(@Body() body: { productId: string; quantity: number }): Promise<void> {
    await this.createOrderUseCase.execute(body.productId, body.quantity);
  }

  @Put(':id')
  async modifyOrder(@Param('id') id: number, @Body() body: { quantity: number }): Promise<void> {
    await this.modifyOrderUseCase.execute(id, body.quantity);
  }

  @Put(':id/cancel')
  async cancelOrder(@Param('id') id: number): Promise<void> {
    await this.cancelOrderUseCase.execute(id);
  }
}