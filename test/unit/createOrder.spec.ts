import { CreateOrderUseCase } from '../../src/application/usecases/createOrder';
import { OrderRepository } from '../../src/infrastructure/repositories/orderRepository';

describe('CreateOrderUseCase', () => {
  let createOrderUseCase: CreateOrderUseCase;
  let orderRepository: OrderRepository;

  beforeEach(() => {
    orderRepository = new OrderRepository();
    createOrderUseCase = new CreateOrderUseCase(orderRepository);
  });

  it('should create an order', async () => {
    await createOrderUseCase.execute('123', 1);
    const order = await orderRepository.findById(1);
    expect(order).toBeDefined();
    expect(order?.productId).toBe('123');
  });
});