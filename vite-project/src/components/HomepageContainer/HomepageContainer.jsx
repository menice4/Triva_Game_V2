
export default function HomepageContainer() {
  // Container for quiz configuration, allowing users to customize their quiz
  return (
    <div id="homepage-container">
      {/* TODO: Add form submission handler */}
      <form action="">
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
            placeholder="Type here"
            required
          />
        </section>
        
        {/* Predefined categories reflect initial app scope 
        - If your project uses camelCase elsewhere, consider changing the value attributes to camelCase as well, like generalKnowledge, scienceAndNature, etc. */}
        <section>
          <label htmlFor="category-dropdown-input">Select Topic Category</label>
          <select name="category" id="category-dropdown-input">
            <option value="generalKnowledge">General Knowledge</option>
            <option value="scienceAndNature">Science and Nature</option>
            <option value="mythology">Mythology</option>
          </select>
        </section>
      </form>
    </div>
  );
}