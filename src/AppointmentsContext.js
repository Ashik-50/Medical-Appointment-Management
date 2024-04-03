//AppointmentsContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AppointmentsContext = createContext();

const initialState = {
  appointments: [],
  // other initial state properties if needed
};

const appointmentsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    // other cases if needed
    default:
      return state;
  }
};

const AppointmentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appointmentsReducer, initialState);

  return (
    <AppointmentsContext.Provider value={{ state, dispatch }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};

export { AppointmentsProvider, useAppointments };
