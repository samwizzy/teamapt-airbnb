import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

export function SelectInput() {
  return (
    <div className="select-control">
      <select name="place" id="place">
        <option value="Anywhere">Anywhere</option>
      </select>
    </div>
  );
}

export function DateInput({ id, value, color }: { id: string; value: string; color?: string }) {
  return (
    <div className="date-control" style={{ backgroundColor: color }}>
      <FiCalendar size="20" color="#717171" />
      <input type="text" name="duration" id={id} defaultValue={value} />
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
        <HiOutlineMinus />
      </button>
      <span className="text-gray-800 text-sm whitespace-nowrap">
        {num} {label}
      </span>
      <button type="button" onClick={increment}>
        <HiOutlinePlus />
      </button>
    </div>
  );
}
