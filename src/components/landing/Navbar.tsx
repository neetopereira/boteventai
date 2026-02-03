// src/components/NavLink.tsx
import React from 'react';

// Define explicitamente o que o componente aceita
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export const NavLink = ({ href, children, mobile = false }: NavLinkProps) => {
  const baseClasses = "text-sm font-medium transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-white/10";
  const desktopClasses = "text-gray-300 hover:text-white relative group";

  if (mobile) {
    return (
      <a href={href} className={`${baseClasses} ${mobileClasses}`}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`${baseClasses} ${desktopClasses}`}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
    </a>
  );
};