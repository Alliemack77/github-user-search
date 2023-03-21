import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <ThemeContext.Provider value={{isDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}