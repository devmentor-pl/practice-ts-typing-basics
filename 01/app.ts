type Theme = (theme: 'light' | 'dark' | 'system') => string;

const setTheme: Theme = (theme) => {
    return `Ustawiono motyw: ${theme}`;
};

console.log(setTheme('light')); 
console.log(setTheme('dark')); 
console.log(setTheme('system')); 
