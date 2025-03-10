export default function CustomInput({label, invalid, ...props}) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass = "w-full px-3 py-2 leading-tight border-sm rounded shadow";

  if (invalid) {
    labelClass += " text-red-500";
    inputClass += " text-red-500 border-red-300 bg-red-100";
  } else {
    labelClass += " text-stone-500";
    inputClass += " text-gray-700 bg-stone-300";
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}