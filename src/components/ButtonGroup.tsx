import { FiMap } from "react-icons/fi";
import { TfiViewGrid } from "react-icons/tfi";

function ButtonGroup() {
  return (
    <div role="radiogroup" className="grid grid-cols-2 bg-gray-200 rounded-md">
      <button className="bg-black rounded-md p-3">
        <TfiViewGrid color="#fff" size="24" />
      </button>
      <button className="bg-gray-200 rounded-r-md p-3">
        <FiMap size="24" />
      </button>
    </div>
  );
}

export default ButtonGroup;
