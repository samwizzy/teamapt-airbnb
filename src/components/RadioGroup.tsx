import { FiGrid, FiMap } from "react-icons/fi";

const RadioGroup = () => {
  return (
    <div className="radio-group">
      <input type="radio" name="option" id="option1" />
      <label htmlFor="option1">
        <FiGrid size="20" />
      </label>

      <input type="radio" name="option" id="option2" />
      <label htmlFor="option2">
        <FiMap size="20" />
      </label>
    </div>
  );
};

export default RadioGroup;
