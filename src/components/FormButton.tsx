import type { ReactNode } from "react";

interface FormButtonProps {
  onClick: () => void;
  children: ReactNode;
}

function FormButton({ onClick, children }: FormButtonProps) {
  return (
    <button
      className="80 mt-4 h-8 w-64 rounded-full border border-2 border-green-300/30 bg-blue-950 font-bold hover:bg-blue-800 focus:border-none focus:outline-none focus:ring focus:ring-2 focus:ring-green-300 active:scale-[0.98] lg:w-96"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FormButton;
