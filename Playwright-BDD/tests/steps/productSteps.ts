import {createBdd} from "playwright-bdd";
import {test,expect} from "@playwright/test";

const {Given, When, Then} = createBdd();

Given('user is on login page', async ({page}) => {
 await page.goto('https://www.saucedemo.com/');
});


When('user enters username', async ({page}) => { 
    await page.locator('#user-name').fill("standard_user");
  
}); 

When('enters password', async ({page}) => {
   await page.locator('#password').fill("secret_sauce"); 
});

When('clicks on login button', async ({page}) => {
  await page.locator('#login-button').click();

});

Then('user is logged in successfully', async ({page}) => {
   await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
});

Given('User is logged in', async ({page}) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

When('User clicks on a product', async ({page}) => {
 await page.locator("//div[text()='Sauce Labs Backpack']").click();
});

Then('the product description is available', async ({page}) => {
  const desc=  await page.locator('//div[@data-test="inventory-item-desc"]').textContent();
  await expect(desc).toBe("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
});

When('User clicks on add to cart button', async ({page}) => { 
    await page.locator("#add-to-cart").click();

  
});

Then('the product is added to the cart', async ({page}) => {
    const num = await page.locator("//span[@data-test='shopping-cart-badge']").textContent();
 await expect(num).toBe("1"); 

});

When('User clicks on cart menu', async ({page}) => {
  await page.locator('//a[@class="shopping_cart_link"]').click(); 
});

Then('the cart is opened', async ({page}) => {
  await expect(page.url()).toBe("https://www.saucedemo.com/cart.html");
});

Then('User is able to view the added product', async ({page}) => { 
    const pdt  =  await page.locator("//div[@class='inventory_item_name']").textContent();
  await expect(pdt).toBe("Sauce Labs Backpack");
});

