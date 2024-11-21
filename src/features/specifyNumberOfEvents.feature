Feature: Specify number of events
    Scenario: Show 32 events by default when no number is specified
        Given the user has not set a specific number of events to display
        Then 32 events should be shown by default

    Scenario: Change the number of events displayed
        Given the user wants to view a specific number of events
        When the user selects a number of events to display
        Then that specified number of events should be shown