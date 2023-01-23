function addNewCommunityToggle() {
    
}

function updateEvent(id, commid) {
    fetch('/events/' + id, {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                description: document.getElementById("event_description_"+id).value,
                eventtime: document.getElementById("event_time_"+id).value,
                commid: commid,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
    
}

function eventDelete(id) {
    fetch('/events/' + id, {
    method: 'DELETE', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    }})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    location.reload()

}

function communityDelete(id) {
    fetch('/communities/' + id, {
    method: 'DELETE', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    location.reload()

}

function addCommunity() {
    fetch('/communities/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById("add_community_name").value,
        })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

            location.reload()

        })
        .catch((error) => {
            console.error('Error:', error);
        });
        location.reload()

}

function addEvent() {
    console.log(JSON.stringify({
        description: document.getElementById("add_event_description").value,
        eventtime: document.getElementById("add_event_eventtime").value,
        commid: document.getElementById("add_event_community").value,
    }))

    fetch('/events/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: document.getElementById("add_event_description").value,
            eventtime: document.getElementById("add_event_eventtime").value,
            commid: document.getElementById("add_event_community").value,
        })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

            location.reload()

        })
        .catch((error) => {
            console.error('Error:', error);
        });
        location.reload()

}

function toggleDisplay(elementid) {
    var x = document.getElementById(elementid);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }