import { useContext } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { FilterContext } from "../context/filterContext";
import { Divider } from ".";

const rooms = ["Any", 1, 2, 3, 4, 5];

function FilterFormDialog() {
  const { state } = useContext(FilterContext);

  return ReactDOM.createPortal(
    <div role="dialog" className={clsx("dialog", { open: state.open })}>
      <div className="dialog__content">
        <div className="flex justify-between py-3 mb-6 border-b">
          <h1 className="font-semibold text-lg mb-2">Filters</h1>
          <span className="text-primary text-sm">Clear All</span>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Price range</h2>
          <span className="text-sm text-gray-500">The average nightly price is $133</span>
        </div>

        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <label htmlFor="minPrice" className="block text-xs text-gray-500 mb-2">
              Min Price
            </label>
            <input type="text" id="minPrice" defaultValue="$0" className="w-full p-3 border rounded-xl text-sm" />
          </div>
          <div>
            <label htmlFor="minPrice" className="block text-xs text-gray-500 mb-2">
              Max Price
            </label>
            <input type="text" id="minPrice" defaultValue="$500+" className="w-full p-3 border rounded-xl text-sm" />
          </div>
        </div>

        <Divider spacing={24} />

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-6">Type of place</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-x-4">
              <input type="checkbox" name="entire_place" id="entire_place" className="mt-1 w-5 h-5 shrink-0" />
              <label htmlFor="entire_place" className="">
                <h3>Entire Place</h3>
                <span className="text-gray-500 text-sm">A place all to yourself</span>
              </label>
            </div>
            <div className="flex items-start gap-x-4">
              <input type="checkbox" name="entire_place" id="entire_place" className="mt-1 w-5 h-5 shrink-0" />
              <label htmlFor="entire_place">
                <h3>Private Room</h3>
                <span className="text-gray-500 text-sm">
                  Your own room in a home or a hotel, plus some shared common places.
                </span>
              </label>
            </div>
            <div className="flex items-start gap-x-4">
              <input type="checkbox" name="entire_place" id="entire_place" className="mt-1 w-5 h-5 shrink-0" />
              <label htmlFor="entire_place">
                <h3>Shared Room</h3>
                <span className="text-gray-500 text-sm">
                  A sleeping space or common areas that may be shared with others.
                </span>
              </label>
            </div>
          </div>
        </div>

        <Divider spacing={24} />

        <div>
          <h2 className="font-semibold text-lg mb-4">Rooms, beds, and baths</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="entire_place" className="block text-sm font-light mb-3">
                Bedrooms
              </label>
              <div className="space-x-3">
                {rooms.map((room) => (
                  <button key={room} className={clsx("chip", { selected: room === "Any" })}>
                    {room}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="entire_place" className="block text-sm font-light mb-3">
                Beds
              </label>
              <div className="space-x-3">
                {rooms.map((room) => (
                  <button key={room} className={clsx("chip", { selected: room === "Any" })}>
                    {room}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="entire_place" className="block text-sm font-light mb-4">
                Bathrooms
              </label>
              <div className="space-x-3">
                {rooms.map((room) => (
                  <button key={room} className={clsx("chip", { selected: room === "Any" })}>
                    {room}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dialog__footer">
        <p>Show 386 Homes </p>
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default FilterFormDialog;
