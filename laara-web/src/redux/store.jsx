import {create} from 'zustand';

const useStore = create(set => ({
  properties: [],
  selectedProperty: null,
  setProperties: properties => set({ properties }),
  setSelectedProperty: property => set({ selectedProperty: property }),
}));

export default useStore;
