import { useState } from "react";

import { createCustomer, updateFullName } from "./customerSlice";
import Input from "../../components/Input";
import FormButton from "../../components/FormButton";
import { useStoreDispatch, useStoreSelector } from "../hooks";

function CustomerCreation() {
  const dispatch = useStoreDispatch();
  const { fullName } = useStoreSelector((store) => store.customer);

  const [fullNameCurrent, setFullNameCurrent] = useState("");
  const [nationalIDCurrent, setNationalIDCurrent] = useState("");

  function handleCustomerCreate() {
    if (!fullNameCurrent || !nationalIDCurrent) return;

    dispatch(createCustomer(fullNameCurrent, nationalIDCurrent));
    setFullNameCurrent("");
    setNationalIDCurrent("");
  }

  function handleUpdateName() {
    if (!fullName) return;

    dispatch(updateFullName(fullNameCurrent));
  }

  return (
    <div className="mt-12 flex flex-col items-center justify-center text-green-300">
      {fullName ? (
        <>
          <h1 className="text-2xl">Hello, {fullName}!</h1>
          <Input
            title="Update name"
            type="text"
            value={fullNameCurrent}
            setValue={setFullNameCurrent}
            customDivClasses="mt-4"
          />
          <FormButton onClick={handleUpdateName}>Update name</FormButton>
        </>
      ) : (
        <>
          <Input
            title="Your name"
            type="text"
            value={fullNameCurrent}
            setValue={setFullNameCurrent}
          />
          <Input
            title="Your national ID"
            type="text"
            value={nationalIDCurrent}
            setValue={setNationalIDCurrent}
            customDivClasses="mt-4"
          />
          <FormButton onClick={handleCustomerCreate}>Create Account</FormButton>
        </>
      )}
    </div>
  );
}

export default CustomerCreation;
