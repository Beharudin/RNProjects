import {createContext, useReducer} from 'react';
import auth from './reducers/Auth';
import contacts from './reducers/Contacts';
import AuthInitialState from './initialStates/AuthInitialState';
import ContactsInitialState from './initialStates/ContactsInitialState';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const {authState, authDispatch} = useReducer(auth, AuthInitialState);
  const {contactsState, contactsDispatch} = useReducer(
    contacts,
    ContactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
