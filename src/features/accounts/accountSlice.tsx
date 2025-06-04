import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type AccountState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      if (state.balance < action.payload) return;
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(loan: string, loanPurpose: string) {
        return {
          payload: { loan, loanPurpose },
        };
      },
      reducer(
        state,
        action: PayloadAction<{ loan: string; loanPurpose: string }>,
      ) {
        if (state.loan || state.loanPurpose) return;
        state.loan = Number(action.payload.loan);
        state.loanPurpose = action.payload.loanPurpose;
        state.balance += state.loan;
      },
    },
    payLoan(state) {
      if (!state.loan || !state.loanPurpose || state.balance < state.loan)
        return;
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
