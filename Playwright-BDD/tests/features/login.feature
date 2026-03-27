
#ith oru type
    # Feature: Login Functionality

    # Scenario: Login with valid credentials
    # Given User is on login page 
    # When User enters username
    # And User enter password
    # And User clicks on login button 
    # Then User is logged in successfully 
    # And User is able to navigate to product page 

    # Scenario: Login with invalid credentials
    # Given User is on login page 
    # When User enters locked_username
    # And User enter password
    # And User clicks on login button 
    # Then User gets an error message 
    # And User is back on login page 




#ith vere type 
    # Feature: Login Functionality

    # Scenario: Login with valid credentials
    # Given User is on login page 
    # When User enters username as "standard_user"
    # And User enter password as "secret_sauce"
    # And User clicks on login button 
    # Then User is logged in successfully 
    # And User is able to navigate to product page 

    # Scenario: Login with invalid credentials
    # Given User is on login page 
    # When User enters username as "locked_out_user"
    # And User enter password as "secret_sauce"
    # And User clicks on login button 
    # Then User gets an error message 
    # And User is back on login page 

#ith ver type using scenario outline 
#  Feature: Login Functionality

#     Scenario Outline: Login with valid credentials
#     Given User is on login page 
#     When User enters "<username>"
#     And User enter "<password>"
#     And User clicks on login button 
#     Then User is logged in successfully 
#     And User is able to navigate to product page 
#     Examples:
#     |username                | password                |
#     |standard_user           | secret_sauce            |
#     |performance_glitch_user | secret_sauce            |
#     |problem_user            | secret_sauce            |
#     |error_user              | secret_sauce            |
#     |visual_user             | secret_sauce            | 


#ith ver type using scenario outline 
#  Feature: Login Functionality

#     Scenario Outline: Login with valid credentials
#     Given User is on login page 
#     When User enters "<username>"
#     And User enter "<password>"
#     And User clicks on login button 
#     Then User is logged in successfully 
#     And User is able to navigate to product page 
#     Examples:
#     |username                | password                |
#     |standard_user           | secret_sauce            |
#     |performance_glitch_user | secret_sauce            |
#     |problem_user            | secret_sauce            |
#     |error_user              | secret_sauce            |
#     |visual_user             | secret_sauce            | 




#ith ver type using scenario outline 
 Feature: Login Functionality
    
    Scenario Outline: Login with valid credentials
    Given User is on login page 
    When User enters <username> and enter <password>
    |username                | password                |
    |standard_user           | secret_sauce            |
    |performance_glitch_user | secret_sauce            |
    |problem_user            | secret_sauce            |
    |error_user              | secret_sauce            |
    |visual_user             | secret_sauce            | 
    And User clicks on login button 
    Then User is logged in successfully 
    And User is able to navigate to product page 
    






   