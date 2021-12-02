
Feature: Specify the number of events

Scenario: When user hasn’t specified a number , 32 is the default number
Given user has not specified a number of events
When the user opens the app
Then the user sees a list of 32 events


Scenario: User can change the number of events they want to see
Given the user opens the app
When the user specifies a number of events
Then the user sees that number of events they specified



