type Product = {
  name: string;
  price: number;
  quantity: number;
};

const data: Product[] = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Coconut", price: 0.6, quantity: 15 },
  { name: "Chocolate", price: 1, quantity: 50 },
];

const calculateTotalSalesWithTax = (
  products: Product[],
  tax: number
): number => {
  let totalSum: number = 0;

  for (const product of products) {
    const totalCost = product.price * product.quantity;
    totalSum = totalSum + totalCost;
  }

  return totalSum + totalSum * (tax / 100);
};

// ----------------------------------------------------- CHECK

const res = calculateTotalSalesWithTax(data, 8);
console.log(res);
