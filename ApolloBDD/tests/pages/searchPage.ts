import { Page, expect } from '@playwright/test';

export class SearchPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // locators
  searchBar = () => this.page.getByPlaceholder('Search for lab tests').first();
  modalInput = () => this.page.getByPlaceholder('Search for lab tests').last();
  results = () => this.page.locator('li');

  // actions
  async navigate() {
    await this.page.goto('https://www.apollo247.com/lab-tests');
  }

  async searchFor(testName: string) {
    await this.searchBar().click();
    await this.modalInput().fill(testName);
  }

  async validateResults() {
    await expect(this.results().first()).toBeVisible();

    const count = await this.results().count();
    expect(count).toBeGreaterThan(0);
  }  
  
  async searchInvalid(term: string) {
  await this.searchBar().click();
  await this.modalInput().fill(term);
}

async verifyNoResults() {
  await expect(this.page.getByText('No Results')).toBeVisible();
}
}