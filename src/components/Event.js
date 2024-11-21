import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <li className="event">
            <h4>{event.summary}</h4>
            <p>{new Date(event.created).toString()}</p>
            <p>
                @{event.summary} | {event.location}
            </p>
            <button className="details-btn" onClick={toggleDetails}>
                {showDetails ? "hide details" : "show details"}
            </button>
            {showDetails ? <div className="details">{event.description}</div> : null}
        </li>
    );
}

export default Event;