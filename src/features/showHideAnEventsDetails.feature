Feature: Show/hide event details
    Scenario: Event is collapsed by default
        Given user is on the main page
        When the user is viewing the events list
        Then each event should be collapsed by default

    Scenario: Expand an event to see details
        Given the user is viewing the events list
        When the user clicks to expand an event
        Then the event details should be visible

    Scenario: Collapse an event to hide details
        Given an event is expanded
        When the user clicks to collapse the event
        Then the event details should be hidden