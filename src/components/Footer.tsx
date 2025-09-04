import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-bold font-playfair">Mi Menú</h3>
          
          <p className="text-emerald-400 font-medium text-xs sm:text-sm">
            Sistema de Cardápios
          </p>
          
          {/* Descrição da Iniciativa */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Iniciativa educacional desenvolvida pela coordenação de informática 
              exclusivamente para a <span className="font-semibold text-emerald-400">ECIT HENRIQUE FERNANDES DE FARIAS</span>
            </p>
          </div>
          
          {/* Desenvolvedor */}
          <div className="pt-2 sm:pt-3 border-t border-gray-700">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center space-x-2">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>por</span>
              <a 
                href="https://www.viniciuslisboa.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-300 flex items-center space-x-1 hover:underline"
              >
                <span>Vinícius Lisboa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};