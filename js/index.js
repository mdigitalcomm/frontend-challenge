(function() {
	const mixsList = document.querySelector('#mixs-activities');
	
	fetch('http://www.mocky.io/v2/5ad156893000006600534be3').then((response) => {
			return response.json();
		}).then(render)
		.catch(requestError);

	/*render events list on homepage with images, event name and city */
	function render(events) {
		let htmlContent = '';		
		events.forEach(event => {
			let eventDescrip = event.description;
			eventDescrip = eventDescrip.replace(' #', '-');	
			htmlContent= 
				`<section id="event">
					<img src="${event.image}" alt="${event.description}">
					<ul>
						<li>${event.description}</li>
						<li>${event.city}</li>
					</ul>
					<a href="./event.html?${eventDescrip}">Find out more</a>
				</section>
				`
			mixsList.insertAdjacentHTML('beforeend', htmlContent);
		});
	}
	/* Error message for AJAX request failure */
	function requestError() {
		mixsList.insertAdjacentHTML('beforeend', '<p>Oops! There was an error making a request for the events list.</p>');
	}



})();