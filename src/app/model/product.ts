export class product {
  name: string;
  price: number;
  id: number;
  description: string;
  url: string;
  qty: number;

  constructor(
    name: string,
    price: number,
    id: number,
    description: string,
    url: string
  ) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.url = url;
    this.description = description;
    this.qty = 1;
  }
}
