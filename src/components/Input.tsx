import { HiOutlineChevronDown } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";
import { useState } from "react";

export function SelectInput() {
  return (
    <div className="select-control">
      <select name="place" id="place">
        <option value="Anywhere">Anywhere</option>
      </select>
      <HiOutlineChevronDown />
    </div>
  );
}

export function DateInput({ id, placeholder, className }: { id: string; placeholder: string; className?: string }) {
  return (
    <div className={`date-control ${className ? className : "bg-white"}`}>
      <FiCalendar size="20" color="#717171" />
      <input type="text" name="duration" id={id} placeholder={placeholder} />
    </div>
  );
}

export function NumberInput({ value, label }: { value: number; label: string }) {
  const [num, setNum] = useState<number>(value);

  const increment = () => setNum((prevNum) => prevNum + 1);
  const decrement = () => num > 0 && setNum((prevNum) => prevNum - 1);

  return (
    <div className="number-control">
      <button type="button" onClick={decrement}>
        -
      </button>
      <span className="text-gray-600">
        {num} {label}
      </span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}
