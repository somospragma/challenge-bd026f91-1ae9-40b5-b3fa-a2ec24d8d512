import { Order } from '../../src/domain/entities/order';

describe('Order Entity', () => {
  it('should create an order', () => {
    const order = new Order();
    order.productId = '123';
    order.quantity = 1;
    order.status = 'pending';
    expect(order).toBeDefined();
  });
});