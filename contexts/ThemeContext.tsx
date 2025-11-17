'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'black' | 'blue';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'black',
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sempre aplica tema azul (decisão final do cliente)
    applyTheme('blue');
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;

    if (newTheme === 'blue') {
      // Tema Azul (#152A3B e variações)
      root.style.setProperty('--background', '21 42 59'); // #152A3B
      root.style.setProperty('--card', '27 52 73'); // Variação mais clara
      root.style.setProperty('--muted', '18 36 50'); // Variação mais escura
      root.style.setProperty('--border', '33 63 88'); // Bordas mais claras
      root.style.setProperty('--input', '21 42 59');
      root.style.setProperty('--secondary', '27 52 73');
    } else {
      // Tema Preto (original)
      root.style.setProperty('--background', '0 0 0');
      root.style.setProperty('--card', '23 23 23');
      root.style.setProperty('--muted', '38 38 38');
      root.style.setProperty('--border', '38 38 38');
      root.style.setProperty('--input', '23 23 23');
      root.style.setProperty('--secondary', '38 38 38');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'black' ? 'blue' : 'black';
    setTheme(newTheme);
    applyTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aetherion-theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
