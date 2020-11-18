const assert = require('assert');
Feature("Google Search");

Scenario("Search Keyword Autocomplete", async ({ I,GoogleHomePage }) => {
  I.amOnPage("https://www.google.co.nz/");

  //Enter search keyword
  I.fillField(GoogleHomePage.searchTextBox, 'Crims')

  //Assertion to check if auto complete suggestion is available
  I.see('Crimson Education')
  
});