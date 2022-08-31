import { createContext } from 'react';

export const PricesSectionContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => false,
]);
