interface InputProps {
  title: string;
  type: "text" | "number";
  value: string;
  setValue: (val: string) => void;
  customDivClasses?: string;
}

function Input({
  title,
  type,
  value,
  setValue,
  customDivClasses = "",
}: InputProps) {
  return (
    <div className={customDivClasses}>
      <h3>{title}</h3>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-8 w-64 rounded-md px-2 py-4 text-slate-800 focus:outline-none focus:ring focus:ring-2 focus:ring-green-300 md:w-80 lg:w-96"
      />
    </div>
  );
}

export default Input;
