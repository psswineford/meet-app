# meet-app

Test Scenarios for the meet app:

Feature 2: Show/Hide an Event’s Details

As a user, I should be able to show events ,So that I can see the details of the events.
Scenario 1: An event element is collapsed by default
Given user has not picked an event
When the user opens the app
Then the user should see a list of upcoming events.
Scenario 2: Ussr can expand an event to see its details
Given user has seen the list of events
When a user clicks on an event
Then the user should see details of the event
Scenario 3: User can collapse an event to hide its details
Given a user has clicked on an event and is viewing its details
When user clicks on button to close the event
Then the events details will hide

Feature 3: Specify the number of events

As a user, I should be able to specify the number of events , So that I can change the number of events I see at a time
Scenario 1: When user hasn’t specified a number , 32 is the default number
Given user has not specified a number of events
When the user opens the app
Then the user sees a list of 32 events
Scenario 2: User can change the number of events they want to see
Given the user opens the app
When the user specifies a number of events
Then the user sees that number of events they specified

Feature 4: Use the app while offline

As a user, I should be able to use the app offline, So that I still have some functionality when not connected to the internet
Scenario 1: Show cached data when there is no internet connection
Given the user opens the app
When there is no internet connection
Then the user sees cached data
Scenario 2: Show error when user changes the settings (City, time range)
Given user is using the app without an internet connection
When the user changes a setting 
Then user sees error message

Feature 5: Data Visualization

As a user, I should be able to see a chart of upcoming events in each city, So that I can easily visualize how many events each city has\
Scenario 1: show a chart with the number of upcoming events in each city
Given user is on the main page
When the user clicks on upcoming events
Then display charts showing upcoming events in each city

