// import {createBdd} from "playwright-bdd";
// import {test, expect} from "@playwright/test";

// const {Given, When, Then} = createBdd();

// Given('User is on login page', async ({page}) => {
//   await page.goto('https://www.saucedemo.com/');
// });  

// When('User enters username', async ({page}) => {
//   await page.locator('#user-name').fill("standard_user");
// });

// When('User enter password', async ({page}) => {
//   await page.locator('#password').fill("secret_sauce");
// });

// When('User clicks on login button', async ({page}) => {
//   await page.locator('#login-button').click();
// });

// Then('User is logged in successfully', async ({page}) => {
//   //  Fix 1: toHaveURL() auto-waits for navigation
//   await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
// });

// Then('User is able to navigate to product page', async ({page}) => {
//   const actualTitle = await page.getByText("Products").textContent();
//   await expect(actualTitle).toBe("Products");
// });

// When('User enters locked_username', async ({page}) => {
//   await page.locator('#user-name').fill("locked_out_user");
// });

// Then('User gets an error message', async ({page}) => {
//   await expect(page.locator("h3[data-test='error']")).toBeVisible();
// });

// Then('User is back on login page', async ({page}) => {
//   // Fix 1 (same): toHaveURL() auto-waits for navigation
//   await expect(page.url()).toBe("https://www.saucedemo.com/");
// });  




 
//case 2


// import {createBdd} from "playwright-bdd";
// import {test, expect} from "@playwright/test";

// const {Given, When, Then} = createBdd();


// Given('User is on login page', async ({page}) => {
//   await page.goto('https://www.saucedemo.com/');
// }); 


// When('User enters username as {string}', async ({page},username) => {
//   await page.locator('#user-name').fill(username);
// });  
    
// When('User enter password as {string}', async ({page},password) => {
//   await page.locator('#password').fill(password); 
// });        

// When('User clicks on login button', async ({page}) => {
//   await page.locator('#login-button').click();
// });

// Then('User is logged in successfully', async ({page}) => {
//   //  Fix 1: toHaveURL() auto-waits for navigation
//   await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
// });

// Then('User is able to navigate to product page', async ({page}) => {
 
//   // Use the specific span with data-test="title" for an exact, reliable match.
//   const title = await page.locator("[data-test='title']").textContent();
//   await expect(title).toBe("Products");   

// }); 


// /*
// When('User enters locked_username', async ({page}) => {
//   await page.locator('#user-name').fill("locked_out_user");
// });*/

// Then('User gets an error message', async ({page}) => {
  
//   await expect(page.locator("h3[data-test='error']")).toBeVisible();
// });

// Then('User is back on login page', async ({page}) => {
//   await expect(page.url()).toBe("https://www.saucedemo.com/"); 

// });   


//case 3

// import {createBdd} from "playwright-bdd";
// import {test, expect} from "@playwright/test";

// const {Given, When, Then} = createBdd(); 

// Given('User is on login page', async ({page}) => {
//   // Step: Given User is on login page
//   await page.goto('https://www.saucedemo.com/');
// });

// When('User enters {string}', async ({page}, username) => {
  
//  await page.locator('#user-name').fill(username);
// });

// When('User enter {string}', async ({page}, password) => { 
//    await page.locator('#password').fill(password);
  
// });

// When('User clicks on login button', async ({page}) => {
// await page.locator('#login-button').click();
// });

// Then('User is logged in successfully', async ({page}) => {
//    await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
// });

// Then('User is able to navigate to product page', async ({page}) => {
//    const actualTitle = await page.getByText("Products").textContent();
//    await expect(actualTitle).toBe("Products"); 
// }); 


//case 4  
import {createBdd,DataTable} from "playwright-bdd";
import {test, expect} from "@playwright/test";

const {Given, When, Then} = createBdd();

Given('User is on login page', async ({page}) => {
  // Step: Given User is on login page 
  await page.goto('https://www.saucedemo.com/');
});

When('User enters <username> and enter <password>', async ({page}, dataTable:DataTable) => {
  // Step: When User enters <username> and enter <password>
  
  { 
    const userLogin  = dataTable.hashes(); 


    await page.locator("#user-name").fill(userLogin[0].username);
    await page.locator('#password').fill(userLogin[0].password);


  }

});

When('User clicks on login button', async ({page}) => {
  // Step: And User clicks on login button
 await page.locator('#login-button').click();
});

Then('User is logged in successfully', async ({page}) => {
  // Step: Then User is logged in successfully
 await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
});

Then('User is able to navigate to product page', async ({page}) => {
  // Step: And User is able to navigate to product page
  const actualTitle = await page.getByText("Products").textContent();
    await expect(actualTitle).toBe("Products"); 
});
 
