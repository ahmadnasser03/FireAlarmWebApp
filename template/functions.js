class Event {
    constructor(id, date_time, zone, event_type) {
        this.id = id;
        this.date_time = date_time;
        this.zone = zone;
        this.event_type = event_type;
    }
}

function logEvent(type, zone) {
    // Assuming you have an instance of the Event class
    const eventInstance = new Event(1, "", zone, type);

    // Sending the instance to the backend using fetch
    fetch("http://localhost:8080/GenD/logEvent", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventInstance),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Backend response:', data);
    })
    .catch(error => {
        console.error('Error sending data to the backend:', error);
    });
}