import "./RadioButton.css";
export default function RadioButton() {
  return (
    <div id="radio-button-container">
    <hr/>
      <p id="radio-button-paragraph">
        Question Difficulty :
        <hr/>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="easy"
          />
         Easy
        </label>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="medium"
          />
         Medium
        </label>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="hard"
          />
         Hard
        </label>
      </p>
    </div>
  );
}
