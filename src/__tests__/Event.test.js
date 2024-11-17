import { render, screen, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe('<Event /> component', () => {
    let event, user;
    beforeEach(async () => {
        user = userEvent.setup();
        const events = await getEvents();

        event = events[0];
        render(<Event event={event} />);
    })

    test('should render event title', async () => {
        expect(screen.queryByText(event.summary)).toBeInTheDocument();
    })

    test('should render event created date', async () => {
        expect(screen.queryByText(event.created)).toBeInTheDocument();
    })

    test('should render event location', async () => {
        expect(screen.queryByText(event.location)).toBeInTheDocument();
    })

    test('should render "show details" button', async () => {
        expect(screen.queryByRole("button", { name: "show details" })).toBeInTheDocument();
    })

    test('should hide the description by default', () => {
        expect(screen.queryByText(event.description)).not.toBeInTheDocument();
    })

    test('should show the description when "show details" button is clicked', async () => {
        await user.click(screen.queryByRole("button", { name: "show details" }));

        expect(screen.queryByText(event.description, { normalizer: (description) => description })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "hide details" })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "show details" })).not.toBeInTheDocument();
    })

    test('should hide the description when "hide details" button is clicked', async () => {
        await user.click(screen.queryByRole("button", { name: "show details" }));

        expect(screen.queryByText(event.description, { normalizer: (description) => description })).toBeInTheDocument();

        await user.click(screen.queryByRole("button", { name: "hide details" }));

        expect(screen.queryByText(event.description, { normalizer: (description) => description })).not.toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "hide details" })).not.toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "show details" })).toBeInTheDocument();
    })
})