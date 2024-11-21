import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('Show 32 events by default when no number is specified', ({ given, when, then }) => {

        let AppComponent;
        given('the user has not set a specific number of events to display', () => {
            AppComponent = render(<App />);
        });

        then('32 events should be shown by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');

            expect(within(NumberOfEventsDOM).queryByLabelText('Number of Events:')).toHaveValue(32);
        });
    });

    test('Change the number of events displayed', ({ given, when, then }) => {

        let noOfEventsInput
        given('the user wants to view a specific number of events', () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            noOfEventsInput = within(NumberOfEventsDOM).queryByLabelText('Number of Events:');
        });

        when('the user selects a number of events to display', async () => {
            await userEvent.type(noOfEventsInput, '{backspace}{backspace}10');
        });

        then('that specified number of events should be shown', () => {
            expect(noOfEventsInput).toHaveValue(10);
        });
    });
})