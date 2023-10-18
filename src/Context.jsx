import { createContext } from 'react';

const ChurchlyContext = createContext();
const ChurchlyProvider = ChurchlyContext.Provider;
const ChurchlyConsumer = ChurchlyContext.Consumer;

export { ChurchlyProvider, ChurchlyConsumer, ChurchlyContext };
