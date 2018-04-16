
	const mixsList = document.querySelector('#mixs-activities');
	
	fetch('http://www.mocky.io/v2/5ad4310b2e00004500583973').then((response) => {
			return response.json();
		}).then(render)
		.catch(requestError);

	/*render events list on homepage with images, event name and city */
	function render(events) {
		let htmlContent = '';
		events.forEach(event => {
			let eventName = event.name;
			eventName = eventName.replace(' #', '-');	
			htmlContent= 
				`
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<a href="./event.html?${eventName}">
								<img src="${event.image}" alt="${event.name}">
							</a>
						</div>
						<div class="card-content">
							<p class="event-name">${event.name}</p>
							<p class="evnet-city">${event.city}</p>	
						</div>
						<div class="card-action">
								<a class="learn-more" href="./event.html?${eventName}">Find out more</a>
						</div>
					</div>				
				</div>
				`
			mixsList.insertAdjacentHTML('beforeend', htmlContent);
		});
	}
	/* Error message for AJAX request failure */
	function requestError() {
		mixsList.insertAdjacentHTML('beforeend', '<p>Oops! There was an error making a request for the events list.</p>');
	}


