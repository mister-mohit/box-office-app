import { useEffect, useReducer } from 'react';

const usePersistedReducer = (reducerFn, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducerFn, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey); 
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const setStarredShows = (currentState, action) => {
  switch (action.type) {
    case 'Unstar':
      return currentState.filter(showId => showId !== action.id);
    case 'Star':
      return currentState.concat(action.id);
    default:
      return currentState;
  }
};

export const useStarredShows = () => {
  return usePersistedReducer(setStarredShows, [], 'starredShows');
};
