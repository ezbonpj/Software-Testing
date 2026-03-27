import {test,expect} from  "@playwright/test" 

test("Test Register Page",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.getByPlaceholder("First Name").fill("Robot");
    await page.getByPlaceholder("Last Name").fill("Automation");

    await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");

    await page.locator("input[type='email']").fill("robot.automation@example.com"); 
    await page.locator("input[type='tel']").fill("1234567890"); 

    const totalGenders =  await page.locator("input[name='radiooptions']");
    console.log("Total Genders: "+ await totalGenders.count()); 

    for(let i=0;i<await totalGenders.count();i++){
        const rowValue  = totalGenders.nth(i);
        const genderValue = await rowValue.getAttribute("value");
        console.log("Gender Value :"+genderValue);

        if(genderValue==="FeMale"){
            await rowValue.check();
            break ;
        }
    }  

    const  totalhobbies  = await page.locator("input[type='checkbox']");
    console.log("Total Hobbies: "+ await totalhobbies.count()); 

    for(let i=0;i<await totalhobbies.count();i++){
        const rowValue = totalhobbies.nth(i);
        const hobbyValue = await rowValue.getAttribute("value");
        console.log("Hobby Value:"+hobbyValue); 

        if(hobbyValue==="Cricket"||hobbyValue==="Hockey"){
            await rowValue.check();
            continue;
        }
    } 
    await page.waitForTimeout(5000);



});