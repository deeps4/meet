
const NumberOfEvents = () => {
    return (
        <div id="number-of-events">
            <label htmlFor="event-number">Number of Events:</label>
            <input type="number" defaultValue={32} id="event-number" />
        </div>
    )
}
export default NumberOfEvents;