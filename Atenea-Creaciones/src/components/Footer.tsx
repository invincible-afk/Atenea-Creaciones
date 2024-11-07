import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SocialLinks from './SocialLinks';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className="relative bg-gradient-to-t from-pink-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF69B4' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-200 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Arte tejido con amor</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Atenea Creaciones
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creando arte tejido a mano con amor y dedicación
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 text-pink-800 dark:text-pink-300">Productos</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Ponchos Artesanales</li>
              <li>Muñecos a Crochet</li>
              <li>Bolsos Tejidos</li>
              <li>Gorros y Bufandas</li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 text-pink-800 dark:text-pink-300">Síguenos</h4>
            <div className="flex justify-center md:justify-start">
              <SocialLinks theme={isDark ? 'dark' : 'light'} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pink-200/20 dark:border-pink-800/20 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atenea Creaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;