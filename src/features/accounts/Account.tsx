import Input from "../../components/Input";
import FormButton from "../../components/FormButton";
import { useState } from "react";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import { useStoreDispatch, useStoreSelector } from "../hooks";

function Account() {
  const [depositAmount, setDepositAmount] = useState("0");
  const [withdrawAmount, setWithdrawAmount] = useState("0");
  const [loanAmount, setLoanAmount] = useState("0");
  const [loanPurposeCurrent, setLoanPurposeCurrent] = useState("");

  const dispatch = useStoreDispatch();
  const { balance, loan, loanPurpose } = useStoreSelector(
    (store) => store.account,
  );

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(Number(depositAmount)));
    setDepositAmount("0");
  }

  function handleWithdraw() {
    if (!withdrawAmount) return;

    dispatch(withdraw(Number(withdrawAmount)));
    setWithdrawAmount("0");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurposeCurrent) return;

    dispatch(requestLoan(loanAmount, loanPurposeCurrent));
    setLoanAmount("0");
    setLoanPurposeCurrent("");
  }

  function handlePayLoan() {
    if (!loan && !loanPurpose) return;

    dispatch(payLoan());
  }

  return (
    <div className="mt-12 flex flex-col items-center justify-center text-green-300">
      <h1 className="mb-4 text-2xl">Balance: {balance}</h1>
      {Boolean(loan && loanPurpose) && (
        <h2>
          Loan: {loan}; Loan purpose: {loanPurpose}
        </h2>
      )}
      <Input
        title="Deposit money"
        type="number"
        value={depositAmount}
        setValue={setDepositAmount}
      />
      <FormButton onClick={handleDeposit}>Deposit</FormButton>
      <Input
        title="Withdraw money"
        type="number"
        value={withdrawAmount}
        setValue={setWithdrawAmount}
        customDivClasses="mt-6"
      />
      <FormButton onClick={handleWithdraw}>Withdraw</FormButton>
      <div className="xl:10/12 md:flex md:w-full md:justify-evenly lg:w-11/12 2xl:w-9/12">
        <Input
          title="Take a loan"
          type="number"
          value={loanAmount}
          setValue={setLoanAmount}
        />
        <Input
          title="What is the purpose of this loan?"
          type="text"
          value={loanPurposeCurrent}
          setValue={setLoanPurposeCurrent}
        />
      </div>
      <FormButton onClick={handleRequestLoan}>Take a loan</FormButton>
      <h3 className="-mb-2 mt-8">Pay back loan</h3>
      <FormButton onClick={handlePayLoan}>Pay the loan</FormButton>
    </div>
  );
}

export default Account;
