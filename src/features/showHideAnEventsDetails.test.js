import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within, } from "@testing-library/react";
import App from '../App.js';
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('Event is collapsed by default', ({ given, when, then }) => {

        let EventListDOM
        given('user is on the main page', () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        when('the user is viewing the events list', async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('each event should be collapsed by default', () => {
            expect(EventListDOM.querySelector('.details')).not.toBeInTheDocument();
        });
    });



    test('Expand an event to see details', ({ given, when, then }) => {

        let EventListDOM;
        given('the user is viewing the events list', () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

        });

        when('the user clicks to expand an event', async () => {
            await waitFor(async () => {
                const eventDom = EventListDOM.querySelector('.event');
                const showDetailsBtn = within(eventDom).queryByRole("button", { name: "show details" });
                await userEvent.click(showDetailsBtn);
            })
        });

        then('the event details should be visible', () => {
            const eventDom = EventListDOM.querySelector('.event');
            expect(eventDom.querySelector('.details')).toBeInTheDocument();
        });
    });


    test('Collapse an event to hide details', ({ given, when, then }) => {

        let EventListDOM;
        given('an event is expanded', async () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');


            await waitFor(async () => {
                const eventDom = EventListDOM.querySelector('.event');
                const showDetailsBtn = within(eventDom).queryByRole("button", { name: "show details" });
                await userEvent.click(showDetailsBtn);
                expect(eventDom.querySelector('.details')).toBeInTheDocument();
            })
        });

        when('the user clicks to collapse the event', async () => {

            //   access event element
            const eventDom = EventListDOM.querySelector('.event');
            // access button hide details inside event element
            const hideDetailsBtn = within(eventDom).queryByRole("button", { name: "hide details" });
            // click on hide detail button
            await userEvent.click(hideDetailsBtn);


        });

        then('the event details should be hidden', () => {
            const eventDom = EventListDOM.querySelector('.event');
            expect(eventDom.querySelector('.details')).not.toBeInTheDocument();

        });
    });
})