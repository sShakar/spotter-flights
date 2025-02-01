import { create } from 'zustand';

const useFlightStore = create((set) => ({
  departure: '',
  destination: '',
  boardingDate: null,
  returningDate: null,
  flights: [],

  setDeparture: (value) => set({ departure: value }),
  setDestination: (value) => set({ destination: value }),
  setBoardingDate: (date) => set({ boardingDate: date }),
  setReturningDate: (date) => set({ returningDate: date }),
  setFlights: (flights) => set({ flights }),
}));

export default useFlightStore;
