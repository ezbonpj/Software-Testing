Feature: Search functionality

  Scenario: User searches for lab tests
  Given User is on lab tests page
  When User searches for "Diabetes"
  Then Results should be displayed

  Scenario: Invalid search shows no results
  Given User is on lab tests page
  When User searches for invalid term "ezbon"
  Then No results message should be displayed