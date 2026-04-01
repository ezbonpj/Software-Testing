// Generated from: tests\features\products.feature
import { test } from "playwright-bdd";

test.describe('Product Functionality', () => {

  test.beforeEach('Background: User is logged in', async ({ Given, When, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('user is on login page', null, { page }); 
    await When('user enters username', null, { page }); 
    await And('enters password', null, { page }); 
    await And('clicks on login button', null, { page }); 
    await Then('user is logged in successfully', null, { page }); 
  });
  
  test('Adding a  product to cart', async ({ Given, When, Then, And, page }) => { 
    await Given('User is logged in', null, { page }); 
    await When('User clicks on a product', null, { page }); 
    await Then('the product description is available', null, { page }); 
    await When('User clicks on add to cart button', null, { page }); 
    await Then('the product is added to the cart', null, { page }); 
    await When('User clicks on cart menu', null, { page }); 
    await Then('the cart is opened', null, { page }); 
    await And('User is able to view the added product', null, { page }); 
  });

  test('View  a product description', async ({ Given, When, Then, page }) => { 
    await Given('User is logged in', null, { page }); 
    await When('User clicks on a product', null, { page }); 
    await Then('the product description is available', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\products.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And clicks on login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is logged in","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on a product","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the product description is available","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks on add to cart button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the product is added to the cart","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks on cart menu","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the cart is opened","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And User is able to view the added product","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And clicks on login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is logged in","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks on a product","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the product description is available","stepMatchArguments":[]}]},
]; // bdd-data-end