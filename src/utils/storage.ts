import { MenuData, MenuItem } from '../types';

const STORAGE_KEY = 'restaurant_menu_data';

export const loadMenuData = (): MenuData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Erro ao carregar dados do menu:', error);
  }
  
  return {
    restaurantName: 'Mi Menú',
    items: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

export const saveMenuData = (data: MenuData): void => {
  try {
    const updatedData = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Erro ao salvar dados do menu:', error);
  }
};

export const generateItemId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};