import { useEffect, useState } from "react";

const usePersistedState = (value, sessionStorageKey) => {
    const [state, setState] = useState(() => {
       
        const persistedState = sessionStorage.getItem(sessionStorageKey);
        return persistedState ? JSON.parse(persistedState) : value;
        
    })
  
    useEffect(() => {
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
    }, [state, sessionStorageKey])
    
    return [state, setState];
  }

export const useSearchStr = () => {
    return usePersistedState('', 'searchString');
}