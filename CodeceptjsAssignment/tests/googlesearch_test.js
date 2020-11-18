const assert = require('assert');
Feature("Google Search");

Scenario("Search Keyword", async ({ I,GoogleHomePage }) => {
  I.amOnPage("https://www.google.co.nz/");

  //Enter search keyword
  I.fillField(GoogleHomePage.searchTextBox, 'Crimson Education')

  //Submit search
  I.click(GoogleHomePage.searchButton)

  //Wait
  I.waitForText('All', 5)

  //Assertion to check if the first search item has Crimson Education
  I.see('Crimson Education NZ - Homepage')
  
});