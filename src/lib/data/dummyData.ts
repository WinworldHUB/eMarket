export interface Order {
  id: number;
  orderValue: number;
  status: string;
  orderDate: string;
  paymentDate: string;
}
const generateRandomStatus = (): string => {
  const statuses = ["status1", "status2", "status3"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const generateRandomDate = (): string => {
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
};

const generateDummyOrders = (count: number): Order[] => {
  const dummyOrders: Order[] = [];
  for (let i = 1; i <= count; i++) {
    const status = generateRandomStatus();
    const orderValue = Math.ceil(Math.random() * 100 + 10);
    const orderDate = generateRandomDate();
    const paymentDate = generateRandomDate();
    dummyOrders.push({ id: i, orderValue, status, orderDate, paymentDate });
  }
  return dummyOrders;
};

const dummyOrders: Order[] = generateDummyOrders(40);

export default dummyOrders;
