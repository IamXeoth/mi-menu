import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { predefinedItems } from '../data/predefinedItems';

interface PredefinedItemSelectorProps {
  category: MenuCategory;
  onSelectItems: (items: MenuItem[]) => void;
  onClose: () => void;
}

const categoryLabels: Record<MenuCategory, string> = {
  entradas: 'Entradas',
  'pratos-principais': 'Pratos Principais',
  sobremesas: 'Sobremesas',
  bebidas: 'Bebidas',
};

export const PredefinedItemSelector: React.FC<PredefinedItemSelectorProps> = ({
  category,
  onSelectItems,
  onClose,
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const items = predefinedItems[category] || [];

  const toggleItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleConfirm = () => {
    const itemsToAdd = items.filter(item => selectedItems.has(item.id));
    onSelectItems(itemsToAdd);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Selecionar {categoryLabels[category]}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-180px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedItems.has(item.id)
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-xs sm:text-sm mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1 sm:mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
                
                {selectedItems.has(item.id) && (
                  <div className="mt-1 sm:mt-2 flex justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-sm sm:text-base text-gray-600">
            {selectedItems.size} {selectedItems.size === 1 ? 'item selecionado' : 'itens selecionados'}
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm sm:text-base"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedItems.size === 0}
              className="px-4 sm:px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Adicionar Selecionados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};