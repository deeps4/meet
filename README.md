# 📅 Meet App

**Meet App** is a serverless, progressive web application (PWA) built with React. It connects to the Google Calendar API, allowing users to discover and filter upcoming events. Designed for an offline-first experience, Meet App also provides interactive charts for visualizing event data and is optimized for home screen access.

## 🎯 Objective

The goal of this project is to create a responsive, serverless web app with **React** using a **test-driven development (TDD)** approach. The application fetches event data from the **Google Calendar API**, enabling users to explore events conveniently across various cities.

---

## 🌟 User Stories

1. **Filter Events by City**

   - As a user, I should be able to **filter events by city**, so that I can **find events relevant to my location**.

2. **Show/Hide Event Details**

   - As a user, I should be able to **show or hide details for an event**, so that I can **view more information when needed and keep my screen uncluttered**.

3. **Specify Number of Events**

   - As a user, I should be able to **specify the number of events displayed**, so that I can **control how much content I see on the screen at once**.

4. **Use the App When Offline**

   - As a user, I should be able to **use the app when offline**, so that I can **access event information even without an internet connection**.

5. **Add an App Shortcut to the Home Screen**

   - As a user, I should be able to **add an app shortcut to my home screen**, so that I can **quickly access the app with one tap**.

6. **Display Charts Visualizing Event Details**
   - As a user, I should be able to **view charts visualizing event details**, so that I can **easily understand trends and summaries of event data**.

---

## 📝 Gherkin Scenarios

### **Feature 1: Filter Events By City**

```gherkin
Feature: Filter events by city

  Scenario: Show all upcoming events when no city is searched
    Given the user has not entered a city in the search field
    When the events are displayed
    Then the user should see upcoming events from all cities

  Scenario: Show a list of suggestions when searching for a city
    Given the user is typing a city name in the search field
    When the city suggestions appear
    Then the user should see a list of suggested cities

  Scenario: Select a city from the suggested list
    Given the user sees a list of suggested cities
    When the user selects a city from the suggestions
    Then the user should see events filtered by the selected city
```

### **Feature 2: Show or hide event details**

```gherkin
Scenario: Event is collapsed by default
Given the user is viewing the events list
Then each event should be collapsed by default

Scenario: Expand an event to see details
Given the user is viewing the events list
When the user clicks to expand an event
Then the event details should be visible

Scenario: Collapse an event to hide details
Given an event is expanded
When the user clicks to collapse the event
Then the event details should be hidden
```

### **Feature 3: Specify the number of events displayed**

```gherkin
Scenario: Show 32 events by default when no number is specified
Given the user has not set a specific number of events to display
When the events are displayed
Then 32 events should be shown by default

Scenario: Change the number of events displayed
Given the user wants to view a specific number of events
When the user selects a number of events to display
Then that specified number of events should be shown
```

### **Feature 4: Offline functionality**

```gherkin
Scenario: Show cached data when there’s no internet connection
Given the user has no internet connection
When the user opens the app
Then the user should see cached event data

Scenario: Show an error when changing search settings while offline
Given the user has no internet connection
When the user attempts to change the search settings (city or number of events)
Then the user should see an error message indicating that changes cannot be made offline
```

### **Feature 5: Add app shortcut to the home screen**

```gherkin
Scenario: Install the meet app as a home screen shortcut
Given the user is using a device that supports home screen shortcuts
When the user opts to add the app to their home screen
Then the meet app should be installed as a shortcut on the device's home screen
```

### **Feature 6: Display charts visualizing event details**

```gherkin
Scenario: Show a chart with the number of upcoming events in each city
Given the user is viewing the events data
When the user navigates to the charts view
Then a chart should display the number of upcoming events in each city

```

---

## 🛠️ Technologies Used

Frontend: React
Backend: Google Calendar API (serverless)
Testing: Jest, React Testing Library
Data Visualization: Recharts or D3.js for charts
PWA: Offline support with Service Workers

---

## 📦 Installation & Setup

1. **Clone the Repository**

```bash
  git clone https://github.com/deeps4/meet-app.git
```

2. **Navigate to the Project Directory**

```bash
   cd meet-app
```

3. **Install Dependencies**

```bash
   npm install
```

4. **Run the App Locally**

```bash
   npm start
```

## 🧪 Testing

**Run tests with Jest:**

```bash
npm test
```
