const options = {
	min: false,
	max: false,
	hide: false,
	text: false
}

function setupOptions () {
	const urlParams = new URLSearchParams(document.location.search);

	for (const option in options){

		if (!urlParams.has(option)){
			continue;
		}
		options[option] = urlParams.get(option);
	}


	if (options.hide) {
		pickers[options.hide].style.display = 'none';
	}

	if (options.min) {
		pickers['date'].setAttribute('min', options.min);
	}

	if (options.max) {
		pickers['date'].setAttribute('max', options.max);
	}

	if (options.text) {
		pickers['text'].innerHTML = options.text;
	}
}
