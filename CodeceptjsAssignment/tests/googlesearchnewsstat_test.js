const assert = require('assert');
Feature("Google Search");

Scenario("Search Keyword and verify news stat results", async ({ I,GoogleHomePage, GoogleSearchPage }) => {
  I.amOnPage("https://www.google.co.nz/");

  //Enter search keyword
  I.fillField(GoogleHomePage.searchTextBox, 'Crimson Education')

 //Hit Enter Keys
  I.pressKey('Enter')

  //Wait
  I.waitForText('All', 5)

  //Go to News tab
 I.click(GoogleSearchPage.newsLink)

 //Grab News stat information
 let statInfo = await I.grabTextFrom(GoogleSearchPage.resultStatInfo)

 I.see('results') 
  
});