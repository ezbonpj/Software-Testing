
import {test,expect} from "@playwright/test"
 
test("to validate the functionality of alert boxes with ok",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
   
    await page.on("dialog",async dialog=> {
        console.log(await dialog.message());
        await new Promise((resolve)=>setTimeout(resolve,3000));
        dialog.accept();
    });
 
   
    await page.locator("//button[@onclick='alertbox()']").click();
    console.log(await page.locator("//p[@id='demo']").textContent())
    await page.waitForTimeout(3000);
});
 
test("to validate alert boxes with ok and cancel",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//a[@href='#CancelTab']").click();
 
    await page.on("dialog",async dialog=>{
        console.log(dialog.message());
        await new Promise((resolve)=>setTimeout(resolve,3000));
        dialog.dismiss();
    })
 
    await page.locator("//button[@onclick='confirmbox()']").click();
    console.log(await page.locator("//p[@id='demo']").textContent())
    await page.waitForTimeout(3000);
});
 
test.only("to validate the prompt box with text data input",async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//a[@href='#Textbox']").click();
 
    await page.on("dialog",async dialog=>{
        await new Promise((promise)=>setTimeout(promise,3000));
        dialog.accept('Robot Automation');
    });
 
    await page.locator("//button[@onclick='promptbox()']").click();
    console.log(await page.locator("//p[@id='demo1']").textContent())
    await page.waitForTimeout(3000);
});
 