import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  // Changed "value" to "pastes" to match your reducer logic
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}  

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;

      // add a check -> paste a already exist  wala case

      
      // Now state.pastes exists!
      state.pastes.push(paste);
      
      // Must stringify before saving to localStorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      
      toast.success("Paste created successfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated");
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed");
      }
    },
  },
})

// Added updateToPaste to the exports
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer                       