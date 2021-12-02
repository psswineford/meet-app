
Feature: Show / Hide an Event's Details

Scenario: An event element is collapsed by default
Given user has not picked an event
When the user opens the app
Then the user should see a list of upcoming events

Scenario: User can expand an event to see its details
Given user has seen the list of events
When a user clicks on an event
Then the user should see details of the event

Scenario: User can collapse an event to hide its details
Given a user has clicked on an event and is viewing its details
When user clicks on button to close the event
Then the events details will hide
