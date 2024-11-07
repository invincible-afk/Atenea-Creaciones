import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ProductSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  reverse?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  imageUrl,
  category,
  reverse = false,
}) => {
  const { isDark } = useTheme();

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
      <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'} flex items-center`}>
        <div className="max-w-xl">
          <span className="text-pink-800 dark:text-pink-300 uppercase tracking-wider text-sm font-medium">
            {category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-playfair text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;