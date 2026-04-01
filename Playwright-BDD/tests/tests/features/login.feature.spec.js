// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters <username> and enter <password>', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"password"}]},{"cells":[{"value":"standard_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"performance_glitch_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"problem_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"error_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"visual_user"},{"value":"secret_sauce"}]}]}}, { page }); 
    await And('User clicks on login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":87,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User enters <username> and enter <password>","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"And User clicks on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
]; // bdd-data-end