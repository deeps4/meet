
const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    return (
        <div id="number-of-events">
            <label htmlFor="event-number">Number of Events:</label>
            <input min={1} type="number" defaultValue={32} id="event-number" onChange={(event) => {
                setCurrentNOE(event.target.value);
                let errorText = '';
                if (event.target.value <= 0) {
                    errorText = 'Only positive numbers are allowed'
                }
                setErrorAlert(errorText);
            }} />
        </div>
    )
}
export default NumberOfEvents;