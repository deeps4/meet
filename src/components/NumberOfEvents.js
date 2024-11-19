
const NumberOfEvents = ({ setCurrentNOE }) => {
    return (
        <div id="number-of-events">
            <label htmlFor="event-number">Number of Events:</label>
            <input type="number" defaultValue={32} id="event-number" onChange={(event) => {
                setCurrentNOE(event.target.value);
            }} />
        </div>
    )
}
export default NumberOfEvents;