import React, { useState } from 'react';
import { Edit2, Trash2, GripVertical } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  onUpdate: (item: MenuItemType) => void;
  onDelete: (id: string) => void;
  isEditing: boolean;
  onEdit: () => void;
}

export const MenuItemComponent: React.FC<MenuItemProps> = ({
  item,
  onUpdate,
  onDelete,
  isEditing,
  onEdit,
}) => {
  const [editData, setEditData] = useState({
    name: item.name,
    description: item.description,
    price: item.price.toString(),
    image: item.image || '',
  });

  const handleSave = () => {
    const price = parseFloat(editData.price) || 0;
    onUpdate({
      ...item,
      name: editData.name.trim(),
      description: editData.description.trim(),
      price: price,
      image: editData.image.trim() || undefined,
    });
    onEdit(); // Close editing mode after saving
  };

  const handleCancel = () => {
    setEditData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      image: item.image || '',
    });
    onEdit();
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-emerald-200 shadow-sm">
        <div className="space-y-4">
          <input
            type="text"
            value={editData.name}
            onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-medium text-sm sm:text-base"
            placeholder="Nome do item"
          />
          
          <textarea
            value={editData.description}
            onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-sm sm:text-base"
            rows={2}
            placeholder="Descrição do item"
          />
          
          <input
            type="url"
            value={editData.image || ''}
            onChange={(e) => setEditData(prev => ({ ...prev, image: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
            placeholder="URL da imagem (opcional)"
          />
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm sm:text-base">R$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={editData.price}
              onChange={(e) => setEditData(prev => ({ ...prev, price: e.target.value }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
              placeholder="0,00"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium text-sm sm:text-base"
            >
              Salvar
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors text-sm sm:text-base"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <GripVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab hidden sm:block" />
          
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop';
              }}
            />
          )}
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">{item.name}</h3>
              {item.isPredefined && (
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full hidden sm:inline">
                  Pré-definido
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <span className="text-lg sm:text-xl font-semibold text-emerald-600">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          
          <div className="flex space-x-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onEdit}
              className="p-1.5 sm:p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
              title="Editar item"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="p-1.5 sm:p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Excluir item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};