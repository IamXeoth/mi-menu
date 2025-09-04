import React from 'react';
import { Download, Eye, ArrowLeft } from 'lucide-react';
import { MenuData, MenuCategory } from '../types';
import { printMenu } from '../utils/print';

interface MenuPreviewProps {
  menuData: MenuData;
  onClose: () => void;
  onBackToHome: () => void;
}

const categoryLabels: Record<MenuCategory, string> = {
  entradas: 'Entradas',
  'pratos-principais': 'Pratos Principais',
  sobremesas: 'Sobremesas',
  bebidas: 'Bebidas',
};

const categoryOrder: MenuCategory[] = ['entradas', 'pratos-principais', 'sobremesas', 'bebidas'];

export const MenuPreview: React.FC<MenuPreviewProps> = ({ menuData, onClose, onBackToHome }) => {
  const itemsByCategory = menuData.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<MenuCategory, typeof menuData.items>);

  // Sort items within each category by order
  Object.keys(itemsByCategory).forEach(category => {
    itemsByCategory[category as MenuCategory].sort((a, b) => a.order - b.order);
  });

  const hasItems = menuData.items.length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Mi Menú - Preview do Cardápio</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <button
              onClick={onBackToHome}
              className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Início</span>
            </button>
            {hasItems && (
              <button
                onClick={printMenu}
                className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
                <span className="sm:hidden">Imprimir</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm sm:text-base"
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-100px)]">
          <div id="menu-preview" className="p-8 bg-white">
            <div className="menu-header">
              <h1 className="restaurant-name font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-800 mb-4">
                {menuData.restaurantName}
              </h1>
              <p className="menu-subtitle text-gray-600 text-base sm:text-lg">
                Cardápio especialmente preparado para você
              </p>
            </div>

            {!hasItems ? (
              <div className="text-center py-8 sm:py-16">
                <p className="text-lg sm:text-xl text-gray-500 mb-2">Cardápio vazio</p>
                <p className="text-sm sm:text-base text-gray-400">Adicione alguns itens para visualizar seu cardápio</p>
              </div>
            ) : (
              <div className="space-y-8 sm:space-y-12">
                {categoryOrder.map(category => {
                  const items = itemsByCategory[category];
                  if (!items || items.length === 0) return null;

                  return (
                    <div key={category} className="category-section">
                      <h2 className="category-title font-playfair text-xl sm:text-2xl font-semibold text-emerald-800 mb-4 sm:mb-6 text-center">
                        {categoryLabels[category]}
                      </h2>
                      
                      <div className="space-y-4 sm:space-y-6">
                        {items.map((item) => (
                          <div key={item.id} className="menu-item border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0">
                            <div className="menu-item-flex flex items-start space-x-3 sm:space-x-4">
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.name} 
                                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 border-2 border-emerald-200"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop';
                                  }}
                                />
                              )}
                              
                              <div className="item-content flex-1">
                              <h3 className="item-name text-base sm:text-lg font-semibold text-emerald-800 mb-1 sm:mb-2 font-playfair">
                                {item.name}
                              </h3>
                              {item.description && (
                                <p className="item-description text-sm sm:text-base text-gray-600 leading-relaxed">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            
                            <div className="item-price text-lg sm:text-xl font-bold text-emerald-600 flex-shrink-0">
                              R$ {item.price.toFixed(2).replace('.', ',')}
                            </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="menu-footer border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                Cardápio gerado em {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};