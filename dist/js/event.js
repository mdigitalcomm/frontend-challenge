

/* Get current event from page URL then render content on the page*/

/* TO-DO: Add error handling in promises */
const eventDetail = document.getElementById('event-detail');
fetch('http://www.mocky.io/v2/5ad4310b2e00004500583973').then((response) => {
		return response.json();
	}).then(getEvent)
	.then((result) => {
		renderEvent(result);
	});


/* Get current event from url*/
function getEvent(events, callback) {
	let eventName = window.location.search.substring(1);
	eventName = eventName.replace('-', " #");
	let selectedEvent = events.filter(function(obj) {
		return obj.name === eventName;
	})[0];
 	return selectedEvent;
}

/*Fill html content of current event*/
function renderEvent(event) {
	let dateTime = event.datetime;
	dateTime = dateTime.replace('T', ' / ').replace('Z', '');
	eventDetail.innerHTML = `
		<h1 id="event-title">${event.name}</h1>
		<img id="event-img" class="responsive-img" src="${event.image}">
		<p id="city-n-place"><span class="ltd">Location:</span> ${event.location}, ${event.city}</p>
		<p id="duration"><span class="ltd">Duration:</span> ${event.duration} hours</p>
		<p id="datetime"><span class="ltd">Time:</span> ${dateTime}</p>
		<p id="event-description"><span class="ltd">Description:</span> ${event.description}</p>
	`;
	initMap(event);
}

/*Initialize google map */
/*TO-DO: fix asynchronous error*/
function initMap(event) {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: event.location_lat, lng: event.location_lng},
		zoom: 15,
		scrollwheel: false
	});
	let marker = new google.maps.Marker({
		position: {lat: event.location_lat, lng: event.location_lng},
		map: map
	});
}
