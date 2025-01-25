import { useState } from "react";
import RadioButton from '../RadioButton/RadioButton';


export default function HomepageContainer() {
  const [numberChosen, setNumberChosen] = useState(0)
  const [categoryChosen, setCategoryChosen] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");




  //construct API
  const apiUrl = `https://opentdb.com/api.php?amount=${numberChosen}&category=${categoryChosen}&difficulty=${difficulty}&type=boolean`;

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.results)
  
    } catch (error) {
      console.log("Error fetching data", error)
    }
  }
  

  // Container for quiz configuration, allowing users to customize their quiz
  return (
    <div id="homepage-container">
      {/* TODO: Add form submission handler */}
      <form onSubmit={handleSubmit}>
        {/* Limit quiz to 1-20 questions to manage user engagement */}
        <section>
          <label htmlFor="api-numberOfQuestions-input">
            Choose the Number of Questions (1-20):
          </label>
          <input
            type="number"
            id="api-numberOfQuestions-input"
            min="1"
            max="20"
            value={numberChosen}
            placeholder="Type here"
            onChange={(e)=> setNumberChosen(e.target.value)}
            required
          />
        </section>
        
        {/* Predefined categories reflect initial app scope 
        - If your project uses camelCase elsewhere, consider changing the value attributes to camelCase as well, like generalKnowledge, scienceAndNature, etc. */}
        <section>
          <label htmlFor="category-dropdown-input">Select Topic Category</label>
          <select name="category" id="category-dropdown-input" value={categoryChosen} onChange={(e)=>setCategoryChosen(e.target.value)}>   
           <option disabled selected value> -- select an option -- </option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
          </select>
      
        </section>
        <section> 
        <RadioButton 
        selectedValue={difficulty}
        onChange ={(value) => setDifficulty(value)}
        />
        </section>
        <section>
          <button type="submit">Start Quiz</button>
        </section>
      </form>
    </div>
  );
}