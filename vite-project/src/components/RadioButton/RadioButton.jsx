import { useState } from "react";
import "./RadioButton.css";
export default function RadioButton({ selectedValue, onChange }) {
  const [difficulty, setDifficulty] = useState("easy");

  const handleDifficultyChange = (e) => {
    const value = e.target.value
    setDifficulty(value);
    if (onChange){
        onChange(value); // notifies the parent
    }


}




  
  return (
    <div id="radio-button-container">
      <hr />
      <p id="radio-button-paragraph">
        Question Difficulty :
        <hr />
        <label>
          <input type="radio" name="radio-button" value="easy" checked = {difficulty === "easy"}  onChange={handleDifficultyChange}/>
          Easy
        </label>
        <label>
          <input type="radio" name="radio-button" value="medium" checked = {difficulty === "medium"}  onChange={handleDifficultyChange}/>
          Medium
        </label>
        <label>
          <input type="radio" name="radio-button" value="hard" checked = {difficulty === "hard"}  onChange={handleDifficultyChange}/>
          Hard
        </label>
      </p>
    </div>
  );
}
