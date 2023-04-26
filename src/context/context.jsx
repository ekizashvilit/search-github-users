import { createContext, useContext } from 'react';

const rootUrl = 'https://api.github.com';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  return <GithubContext.Provider value="hi">{children}</GithubContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};
