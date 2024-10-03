import React, { useState } from "react";

import { createContext } from "react";

export const UseContext = createContext();

function ContextProvider({children}) {
  const [ ShoppingCard , SetShoppingCard] = useState(false);

  return (
    <UseContext.Provider value={{ ShoppingCard, SetShoppingCard }}>
      {children}
    </UseContext.Provider>
  );
}

export default  ContextProvider;
