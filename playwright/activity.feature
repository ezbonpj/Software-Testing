Feature: Add to Cart  Functionality 
Scenario: Adding the product to cart 
Given User is in  Product Page
And User selects the product
And User clicks add to cart button 
Then product is displayed in Cart. 

Scenario: Removing the product from cart 
Given User is in  Cart Page
And User selects the product
And User clicks Remove button 
Then product is removed from Cart.  


Scenario: Removing the product from cart 
Given User is in  Product Page
And User selects the product
And User clicks products card 
Then product description is displayed. 



 