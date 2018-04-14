


/* Get current event from page URL then render content on the page*/
(function() {
	let selectedEvent;
	let map;
	const eventDetail = document.getElementById('event-detail');
	fetch('http://www.mocky.io/v2/5ad156893000006600534be3').then((response) => {
			return response.json();
		}).then(getEvent)
		.then((result) => {
			renderEvent(result);
			initMap(result);
			fillBreadcrumb(result);
		});


	/* Get current event from url*/
	function getEvent(events) {
		let eventDescription = window.location.search.substring(1);
		eventDescription = eventDescription.replace('-', " #");
		selectedEvent = events.filter(function(obj) {
			return obj.description === eventDescription;
		})[0];
	 	return selectedEvent;
	}

	/*Fill html content of current event*/
	function renderEvent(event) {
		eventDetail.innerHTML = `
			<img id="event-img" src="${event.image}">
			<h1 id="description">${event.description}</h1>
			<p id="city-n-place">${event.location}, ${event.city}</p>
			<p id="duration">${event.time}</p>
			<p id="datetime">${event.datetime}</p>
		`;
	}

	/*Initialize google map */
	function initMap(event) {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: event.location_lat, lng: event.location_lng},
			zoom: 15,
			scrollwheel: false
		});
		let marker = new google.maps.Marker({
			position: {lat: event.location_lat, lng: event.location_lng},
			map: map
		});	
	}



	function fillBreadcrumb(event) {
		const currentEvent = document.getElementById('current-event');
		currentEvent.innerHTML = `${event.description}`;
	}

})();