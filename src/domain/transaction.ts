export class Transaction {
  id: string;
  amount: number;
  date: Date;
  status: string;

  constructor(id: string, amount: number, date: Date, status: string) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.status = status;
  }
}