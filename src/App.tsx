import { useStoreSelector } from "./features/hooks";

import blurry_bg from "./assets/blurry-bg.png";
import Header from "./components/Header";
import CustomerCreation from "./features/customers/CustomerCreation";
import Account from "./features/accounts/Account";

function App() {
  const { fullName } = useStoreSelector((store) => store.customer);

  return (
    <>
      <img
        src={blurry_bg}
        alt=""
        className="fixed inset-0 -z-20 h-full w-full"
      />
      <div className="fixed inset-0 -z-10 h-full w-full bg-black/75"></div>
      <Header />
      <CustomerCreation />
      {fullName && <Account />}
    </>
  );
}

export default App;
