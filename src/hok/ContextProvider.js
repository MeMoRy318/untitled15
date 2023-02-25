import {createContext, useState} from "react";


const ThemeContext = createContext(null);


const ContextProvider = ({children}) => {


    const [theme,setTheme] = useState('dark')


    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ContextProvider,ThemeContext};