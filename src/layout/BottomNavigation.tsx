import { useContext, useEffect, useRef } from "react";
import { DateInput, FilterFormDialog, NumberInput, RadioGroup, SelectInput } from "../components";
import { FiFilter } from "react-icons/fi";
import { FilterContext } from "../context/filterContext";

function BottomNavigation() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { dispatch } = useContext(FilterContext);

  const handleOpen = () => dispatch({ type: "TOGGLE" });

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch({ type: "CLOSE" });
      }
    };

    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [dispatch]);

  return (
    <section role="search" className="h-18 sticky z-10 bg-white top-0 border-b px-8 py-3">
      <div className="flex justify-between items-center">
        <RadioGroup />

        <fieldset>
          <form className="flex items-center gap-x-3">
            <SelectInput />
            <DateInput id="duration" placeholder="June 14 - 21" className="bg-gray-150" />
            <NumberInput value={0} label="guests" />
          </form>
        </fieldset>

        <div ref={modalRef}>
          <button className="w-12 h-12 grid place-content-center bg-gray-150 rounded-md p-3" onClick={handleOpen}>
            <FiFilter size="20" color="#717171" />
          </button>

          <FilterFormDialog />
        </div>
      </div>
    </section>
  );
}

export default BottomNavigation;
