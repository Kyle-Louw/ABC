export type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: 'Starters' | 'Mains' | 'Desserts';
  price: number;
};
