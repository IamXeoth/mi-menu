export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  order: number;
  image?: string;
  isPredefined?: boolean;
}

export type MenuCategory = 'entradas' | 'pratos-principais' | 'sobremesas' | 'bebidas';

export interface MenuData {
  restaurantName: string;
  items: MenuItem[];
  createdAt: string;
  updatedAt: string;
}