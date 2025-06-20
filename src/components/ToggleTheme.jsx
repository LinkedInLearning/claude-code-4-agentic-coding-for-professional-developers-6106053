import { useState, useEffect } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'auto';
  });
  const themeAuto = () => 
    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" stroke-width="1.25"> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> <path d="M12 3l0 18"></path> <path d="M12 9l4.65 -4.65"></path> <path d="M12 14.3l7.37 -7.37"></path> <path d="M12 19.6l8.85 -8.85"></path> </svg>)

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'auto') {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      root.setAttribute('data-theme', prefersDarkScheme.matches ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case 'auto':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
        newTheme = 'auto';
        break;
    }
    setTheme(newTheme);
  }

  const renderText = () => {
    switch (theme) {
      case 'auto':
        return themeAuto();
      case 'light':
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" strokeWidth="1.25"> <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path> <path d="M6.343 17.657l-1.414 1.414"></path> <path d="M6.343 6.343l-1.414 -1.414"></path> <path d="M17.657 6.343l1.414 -1.414"></path> <path d="M17.657 17.657l1.414 1.414"></path> <path d="M4 12h-2"></path> <path d="M12 4v-2"></path> <path d="M20 12h2"></path> <path d="M12 20v2"></path> </svg>);
      case 'dark':
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" strokeWidth="1.25"> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg>);
    }
  }

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>{renderText()}</div>
  )
}

export default ToggleTheme;