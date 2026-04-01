Feature: Login Functionality

    Scenario: Login with valid credentials
    Given User is on login page 
    When User enters username
    And User enter password
    And User clicks on login button 
    Then User is logged in successfully 
    And User is able to navigate to product page 

    Scenario: Login with invalid credentials
    Given User is on login page 
    When User enters locked_username
    And User enter password
    And User clicks on login button 
    Then User gets an error message 
    And User is back on login page 

