import { useState } from "react";
import "./RadioButton.css";
export default function RadioButton({ selectedValue, onChange}) {

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
          <input type="radio" name="radio-button" value="easy" checked = {selectedValue === "easy"}  onChange={handleDifficultyChange}/>
          Easy
        </label>
        <label>
          <input type="radio" name="radio-button" value="medium" checked = {selectedValue === "medium"}  onChange={handleDifficultyChange}/>
          Medium
        </label>
        <label>
          <input type="radio" name="radio-button" value="hard" checked = {selectedValue === "hard"}  onChange={handleDifficultyChange}/>
          Hard
        </label>
      </p>
    </div>
  );
}
