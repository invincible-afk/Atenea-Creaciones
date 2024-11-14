import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SocialLinks from './SocialLinks';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('/src/Assets/images/patron.jpg')] bg-cover bg-center opacity-35 dark:opacity-10" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF69B4' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Arte tejido con amor</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-pink-900 dark:text-pink-100 leading-tight">
            Atenea
            <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Creaciones
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Descubre la magia de nuestras creaciones artesanales, donde cada punto cuenta una historia y cada diseño lleva un pedacito de nuestro corazón
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <SocialLinks theme={isDark ? 'dark' : 'light'} />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              className="fill-white dark:fill-gray-800"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
