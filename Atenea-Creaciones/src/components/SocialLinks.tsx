import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface SocialLinksProps {
  theme: 'light' | 'dark';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ theme }) => {
  const iconClass = `w-5 h-5 ${theme === 'light' ? 'text-pink-800' : 'text-pink-200'}`;
  const linkClass = `p-2 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded-full transition-colors duration-200`;

  return (
    <div className="flex gap-4">
      <a href="https://instagram.com" className={linkClass} aria-label="Instagram">
        <Instagram className={iconClass} />
      </a>
      <a href="https://facebook.com" className={linkClass} aria-label="Facebook">
        <Facebook className={iconClass} />
      </a>
      <a href="https://twitter.com" className={linkClass} aria-label="Twitter">
        <Twitter className={iconClass} />
      </a>
    </div>
  );
};

export default SocialLinks;