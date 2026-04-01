@tag1
Feature: Product Functionality 

Background: User is logged in 
Given user is on login page
When user enters username 
And enters password 
And clicks on login button 
Then user is logged in successfully 

@regression @sanity @addProduct 
Scenario:  Adding a  product to cart 
Given User is logged in 
When User clicks on a product 
Then the product description is available 
When User clicks on add to cart button 
Then the product is added to the cart 
When User clicks on cart menu 
Then the cart is opened 
And User is able to view the added product 

@regression @viewProduct
Scenario: View  a product description
Given User is logged in 
When User clicks on a product 
Then the product description is available 

