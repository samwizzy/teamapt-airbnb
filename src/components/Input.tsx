import { HiOutlineChevronDown } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

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

export function NumberInput({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-x-2 p-2 bg-gray-150 rounded-lg">
      <button type="button" className="grid place-content-center w-8 h-8 p-2 text-lg rounded-lg bg-white text-primary">
        -
      </button>
      <span className="text-gray-600">{value}</span>
      <button type="button" className="grid place-content-center w-8 h-8 p-2 text-lg rounded-lg bg-white text-primary">
        +
      </button>
    </div>
  );
}
