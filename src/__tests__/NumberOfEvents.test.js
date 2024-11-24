import { render, screen } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />)
    })

    test('should render event count input', () => {
        expect(screen.queryByLabelText('Number of Events:')).toBeInTheDocument();
    })

    test('should show the default value of number of events 32', () => {
        expect(screen.queryByLabelText('Number of Events:')).toHaveValue(32);
    })

    test('should change the value of number of events when updated', async () => {
        const user = userEvent.setup();

        await user.type(screen.queryByLabelText('Number of Events:'), '{backspace}{backspace}10');
        expect(screen.queryByLabelText('Number of Events:')).toHaveValue(10);
    })

    test('should call setErrorAlert with error text when 0 is added to the input field', async () => {
        const setErrorAlertMock = jest.fn();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={setErrorAlertMock} />)

        const user = userEvent.setup();

        await user.type(screen.queryByLabelText('Number of Events:'), '{backspace}{backspace}0');

        expect(setErrorAlertMock).toHaveBeenLastCalledWith('Only positive numbers are allowed')
    })

    test('should call setErrorAlert with error text when negative number is added to the input field', async () => {
        const setErrorAlertMock = jest.fn();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={setErrorAlertMock} />)

        const user = userEvent.setup();

        await user.type(screen.queryByLabelText('Number of Events:'), '{backspace}{backspace}-5');

        expect(setErrorAlertMock).toHaveBeenLastCalledWith('Only positive numbers are allowed')
    })
})