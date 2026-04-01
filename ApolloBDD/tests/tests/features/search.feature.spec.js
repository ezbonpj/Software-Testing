// Generated from: tests\features\search.feature
import { test } from "playwright-bdd";

test.describe('Search functionality', () => {

  test('User searches for lab tests', async ({ Given, When, Then, page }) => { 
    await Given('User is on lab tests page', null, { page }); 
    await When('User searches for "Diabetes"', null, { page }); 
    await Then('Results should be displayed'); 
  });

  test('Invalid search shows no results', async ({ Given, When, Then, page }) => { 
    await Given('User is on lab tests page', null, { page }); 
    await When('User searches for invalid term "ezbon"', null, { page }); 
    await Then('No results message should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on lab tests page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User searches for \"Diabetes\"","stepMatchArguments":[{"group":{"start":18,"value":"\"Diabetes\"","children":[{"start":19,"value":"Diabetes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Results should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on lab tests page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User searches for invalid term \"ezbon\"","stepMatchArguments":[{"group":{"start":31,"value":"\"ezbon\"","children":[{"start":32,"value":"ezbon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then No results message should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end