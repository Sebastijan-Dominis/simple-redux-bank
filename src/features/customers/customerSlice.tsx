import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type CustomerState = {
  fullName: string;
  nationalID: string;
  createdAt: string;
};

const initialState: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalID: string) {
        return {
          payload: { fullName, nationalID },
        };
      },

      reducer(
        state,
        action: PayloadAction<{ fullName: string; nationalID: string }>,
      ) {
        if (!action.payload.fullName || !action.payload.nationalID) return;
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateFullName(state, action: PayloadAction<string>) {
      if (!action.payload) return;
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateFullName } = customerSlice.actions;

export default customerSlice.reducer;
