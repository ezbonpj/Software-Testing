import {createBdd,DataTable} from "playwright-bdd";
import {test, expect} from "@playwright/test";
import { SearchPage } from '../pages/searchPage';
const {Given, When, Then} = createBdd();

let searchPage:SearchPage;

Given('User is on lab tests page', async ({page}) => {
 searchPage = new SearchPage(page);
  await searchPage.navigate();
});

When('User searches for {string}', async ({page},testName:string ) => {
  await searchPage.searchFor(testName);
});

Then('Results should be displayed', async () => {
  await searchPage.validateResults();
}); 


When('User searches for invalid term {string}', async ({page}, term: string) => {
 await searchPage.searchInvalid(term);
});

Then('No results message should be displayed', async () => {
    await searchPage.verifyNoResults();
});

