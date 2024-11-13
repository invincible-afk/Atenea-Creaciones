import React from 'react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { products } from './data/products';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FDF6EC] dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        
        <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:gap-24">
            {products.map((product, index) => (
              <ProductSection 
                key={index} 
                {...product} 
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;