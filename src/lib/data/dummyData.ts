export interface Order {
    id: number;
    itemName: string;
    price: number;
    status: string;
  }
  
  const generateRandomStatus = (): string => {
    const statuses = ["Sold", "On the way", "Payment Pending"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };
  
  const generateDummyOrders = (count: number): Order[] => {
    const dummyOrders: Order[] = [];
    for (let i = 1; i <= count; i++) {
      const status = generateRandomStatus();
      const price = Math.random() * 100 + 10; // Generate random price between 10 and 110
      dummyOrders.push({ id: i, itemName: `Product ${i}`, status, price });
    }
    return dummyOrders;
  };
  
  const dummyOrders: Order[] = generateDummyOrders(40);
  
  export default dummyOrders;
  