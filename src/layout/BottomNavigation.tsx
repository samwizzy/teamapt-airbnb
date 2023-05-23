import { useContext } from "react";
import { DateInput, NumberInput, RadioGroup, SelectInput } from "../components";
import { FiFilter } from "react-icons/fi";
import { FilterContext } from "../context/filterContext";

function BottomNavigation() {
  const { dispatch } = useContext(FilterContext);

  const handleOpen = () => dispatch({ type: "TOGGLE" });

  return (
    <div role="search" className="h-18 sticky z-10 bg-white top-0 border-b px-8 py-3">
      <div className="flex justify-between items-center">
        <RadioGroup />

        <fieldset>
          <form className="flex items-center gap-x-3">
            <SelectInput />
            <DateInput id="duration" value="June 14 - 21" />
            <NumberInput value={0} label="guests" />
          </form>
        </fieldset>

        <button
          aria-label="open"
          className="w-12 h-12 grid place-content-center bg-gray-150 rounded-md p-3"
          onClick={handleOpen}
        >
          <FiFilter size="20" color="#717171" className="pointer-events-none" />
        </button>
      </div>
    </div>
  );
}

export default BottomNavigation;
