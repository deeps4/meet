import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <li>
            <div>{event.summary}</div>
            <div>{event.created}</div>
            <div>{event.location}</div>
            <button onClick={toggleDetails}>
                {showDetails ? "hide details" : "show details"}
            </button>
            {showDetails ? <div>{event.description}</div> : null}
        </li>
    );
}

export default Event;