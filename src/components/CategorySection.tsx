import React, { useState } from 'react';
import { Plus, Grid } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MenuItemComponent } from './MenuItem';
import { PredefinedItemSelector } from './PredefinedItemSelector';

interface CategorySectionProps {
  category: MenuCategory;
  items: MenuItem[];
  onAddItem: (category: MenuCategory) => void;
  onAddPredefinedItems: (items: MenuItem[]) => void;
  onUpdateItem: (item: MenuItem) => void;
  onDeleteItem: (id: string) => void;
}

const categoryLabels: Record<MenuCategory, string> = {
  entradas: 'Entradas',
  'pratos-principais': 'Pratos Principais',
  sobremesas: 'Sobremesas',
  bebidas: 'Bebidas',
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  items,
  onAddItem,
  onAddPredefinedItems,
  onUpdateItem,
  onDeleteItem,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showPredefinedSelector, setShowPredefinedSelector] = useState(false);

  const handleEdit = (itemId: string) => {
    setEditingId(editingId === itemId ? null : itemId);
  };

  const handleSelectPredefinedItems = (selectedItems: MenuItem[]) => {
    onAddPredefinedItems(selectedItems);
    setShowPredefinedSelector(false);
  };

  return (
    <>
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-emerald-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-playfair">
          {categoryLabels[category]}
        </h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <button
            onClick={() => setShowPredefinedSelector(true)}
            className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm text-sm sm:text-base"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Escolher do Cardápio</span>
            <span className="sm:hidden">Pré-definidos</span>
          </button>
          <button
            onClick={() => onAddItem(category)}
            className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar Personalizado</span>
            <span className="sm:hidden">Personalizado</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-8 sm:py-12 text-gray-500">
            <p className="text-base sm:text-lg mb-2">Nenhum item nesta categoria</p>
            <p className="text-xs sm:text-sm">Clique em "Adicionar" para começar</p>
          </div>
        ) : (
          items.map((item) => (
            <MenuItemComponent
              key={item.id}
              item={item}
              onUpdate={onUpdateItem}
              onDelete={onDeleteItem}
              isEditing={editingId === item.id}
              onEdit={() => handleEdit(item.id)}
            />
          ))
        )}
      </div>
    </div>

      {showPredefinedSelector && (
        <PredefinedItemSelector
          category={category}
          onSelectItems={handleSelectPredefinedItems}
          onClose={() => setShowPredefinedSelector(false)}
        />
      )}
    </>
  );
};