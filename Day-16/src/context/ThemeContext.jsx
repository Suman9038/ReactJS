import React from "react";
import { useState } from "react";
import { createContext } from "react";

    export const ThemeDataContext = createContext();  // First step Create karo context
  

const ThemeContext = (props) => {

  const [theme, setTheme] = useState("light")
  return (
    <div>
      {/* Provide karo context using provider se  */}
        <ThemeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
