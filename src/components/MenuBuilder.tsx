import React, { useState } from 'react';
import { Settings, Eye, Home, ArrowLeft } from 'lucide-react';
import { MenuData, MenuItem, MenuCategory } from '../types';
import { CategorySection } from './CategorySection';
import { generateItemId } from '../utils/storage';
import { useToast } from '../hooks/useToast';
import { Toast } from './Toast';
import { LoadingSpinner } from './LoadingSpinner';

const categoryLabels: Record<MenuCategory, string> = {
  'entradas': 'Entradas',
  'pratos-principais': 'Pratos Principais',
  'sobremesas': 'Sobremesas',
  'bebidas': 'Bebidas',
};

interface MenuBuilderProps {
  menuData: MenuData;
  onUpdateMenu: (data: MenuData) => void;
  onPreview: () => void;
  onBackToHome: () => void;
}

const categories: MenuCategory[] = ['entradas', 'pratos-principais', 'sobremesas', 'bebidas'];

export const MenuBuilder: React.FC<MenuBuilderProps> = ({
  menuData,
  onUpdateMenu,
  onPreview,
  onBackToHome,
}) => {
  const [isEditingRestaurantName, setIsEditingRestaurantName] = useState(false);
  const [restaurantName, setRestaurantName] = useState(menuData.restaurantName);
  const [isLoading, setIsLoading] = useState(false);
  const { toasts, removeToast, success, error } = useToast();

  const handleAddItem = (category: MenuCategory) => {
    setIsLoading(true);
    const maxOrder = Math.max(
      ...menuData.items.filter(item => item.category === category).map(item => item.order),
      -1
    );

    const newItem: MenuItem = {
      id: generateItemId(),
      name: 'Novo Item',
      description: 'Descrição do item',
      price: 0,
      category,
      order: maxOrder + 1,
      isPredefined: false,
    };

    onUpdateMenu({
      ...menuData,
      items: [...menuData.items, newItem],
    });
    
    setTimeout(() => {
      setIsLoading(false);
      success('Item adicionado com sucesso!');
    }, 300);
  };

  const handleAddPredefinedItems = (selectedItems: MenuItem[]) => {
    setIsLoading(true);
    const maxOrderByCategory = categories.reduce((acc, cat) => {
      acc[cat] = Math.max(
        ...menuData.items.filter(item => item.category === cat).map(item => item.order),
        -1
      );
      return acc;
    }, {} as Record<MenuCategory, number>);

    const itemsToAdd = selectedItems.map((item, index) => ({
      ...item,
      id: generateItemId(),
      order: maxOrderByCategory[item.category] + index + 1,
      isPredefined: true,
    }));

    onUpdateMenu({
      ...menuData,
      items: [...menuData.items, ...itemsToAdd],
    });
    
    setTimeout(() => {
      setIsLoading(false);
      success(`${selectedItems.length} ${selectedItems.length === 1 ? 'item adicionado' : 'itens adicionados'} com sucesso!`);
    }, 300);
  };

  const handleUpdateItem = (updatedItem: MenuItem) => {
    onUpdateMenu({
      ...menuData,
      items: menuData.items.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      ),
    });
    success('Item atualizado com sucesso!');
  };

  const handleDeleteItem = (id: string) => {
    onUpdateMenu({
      ...menuData,
      items: menuData.items.filter(item => item.id !== id),
    });
    success('Item removido com sucesso!');
  };

  const handleSaveRestaurantName = () => {
    if (!restaurantName.trim()) {
      error('Nome do restaurante não pode estar vazio!');
      return;
    }
    
    onUpdateMenu({
      ...menuData,
      restaurantName: restaurantName.trim() || 'Meu Restaurante',
    });
    setIsEditingRestaurantName(false);
    success('Nome do restaurante atualizado!');
  };

  const itemsByCategory = menuData.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<MenuCategory, MenuItem[]>);

  // Sort items within each category
  Object.keys(itemsByCategory).forEach(category => {
    itemsByCategory[category as MenuCategory].sort((a, b) => a.order - b.order);
  });

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #F8FDF9 0%, #F5FBF6 50%, #F2F9F3 100%)'
    }}>
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </button>
            
            <div className="flex items-center space-x-2 sm:space-x-4 flex-1 w-full sm:w-auto">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 flex-shrink-0" />
              {isEditingRestaurantName ? (
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                  <input
                    type="text"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    className="flex-1 text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 bg-transparent border-b-2 border-emerald-600 focus:outline-none font-playfair"
                    onKeyPress={(e) => e.key === 'Enter' && handleSaveRestaurantName()}
                    autoFocus
                  />
                  <button
                    onClick={handleSaveRestaurantName}
                    className="px-3 sm:px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors text-xs sm:text-sm flex-shrink-0"
                  >
                    Salvar
                  </button>
                </div>
              ) : (
                <h1
                  className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-800 font-playfair cursor-pointer hover:text-emerald-700 transition-colors"
                  onClick={() => setIsEditingRestaurantName(true)}
                  title="Clique para editar"
                >
                  {menuData.restaurantName}
                </h1>
              )}
            </div>

            <button
              onClick={onPreview}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Visualizar Cardápio</span>
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Mi Menú - Crie seu cardápio profissional de forma simples e rápida. 
            Adicione itens, organize por categorias e gere um cardápio pronto para impressão.
          </p>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
              <LoadingSpinner size="md" />
              <span className="text-gray-700 font-medium">Processando...</span>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {categories.map(category => (
            <CategorySection
              key={category}
              category={category}
              items={itemsByCategory[category] || []}
              onAddItem={handleAddItem}
              onAddPredefinedItems={handleAddPredefinedItems}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-4 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            <div className="text-center p-2 sm:p-3 bg-emerald-50 rounded-lg col-span-2 sm:col-span-1">
              <p className="text-lg sm:text-xl font-bold text-emerald-700">{menuData.items.length}</p>
              <p className="text-gray-600 text-xs sm:text-sm">Total de Itens</p>
            </div>
            
            {categories.map(category => {
              const count = (itemsByCategory[category] || []).length;
              return (
                <div key={category} className="text-center p-2 sm:p-3 bg-green-50 rounded-lg">
                  <p className="text-base sm:text-lg font-semibold text-gray-700">{count}</p>
                  <p className="text-gray-600 text-xs">{categoryLabels[category]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Toast Notifications */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};