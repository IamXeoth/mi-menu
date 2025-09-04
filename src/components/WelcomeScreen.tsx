import React from 'react';
import { Leaf, Menu, Download, Smartphone } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-25 via-sage-25 to-mint-25" style={{
      background: 'linear-gradient(135deg, #F8FDF9 0%, #F5FBF6 50%, #F2F9F3 100%)'
    }}>
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 sm:p-4 bg-emerald-600 rounded-full shadow-lg animate-pulse-scale">
              <Leaf className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-playfair">
            Mi Menú
          </h1>
          
          <p className="text-lg sm:text-xl text-emerald-600 font-semibold mb-4">
            Sistema de Cardápios
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Crie cardápios profissionais e elegantes de forma simples e rápida. 
            Sem complicações, sem cadastros, apenas resultados incríveis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Menu className="w-8 h-8 sm:w-10 h-10 lg:w-12 lg:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Interface Intuitiva</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Adicione itens facilmente, organize por categorias e edite em tempo real
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Download className="w-8 h-8 sm:w-10 h-10 lg:w-12 lg:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Download Instantâneo</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Gere seu cardápio em PDF ou imprima diretamente, pronto para usar
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <Smartphone className="w-8 h-8 sm:w-10 h-10 lg:w-12 lg:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Totalmente Local</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Seus dados ficam seguros no seu navegador, sem necessidade de cadastro
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Começar Agora</span>
          </button>
        </div>

        <div className="mt-8 sm:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            Ideal para restaurantes, cafés, lanchonetes e food trucks
          </p>
        </div>
      </div>
    </div>
  );
};