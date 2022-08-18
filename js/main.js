var pickers = {
	date: document.querySelector('input[type="date"]'),
	time: document.querySelector('input[type="time"]'),
	text: document.querySelector('#text')
}


const setDefaultValues = (pickers) => {
	const current = new Date();
	
	const date = [ current.getFullYear(), current.getMonth() + 1, current.getDate() ]
		.map(item => item.toString().padStart(2, "0"))
		.join("-");

	pickers.date.value = date;

	const time = [ current.getHours(), current.getMinutes() ]
		.map(item => item.toString().padStart(2, "0"))
		.join(":");

	pickers.time.value = time;
}
setDefaultValues(pickers);



pickers.date.addEventListener('change', pickHandler)
pickers.time.addEventListener('change', pickHandler)

function pickHandler (e) {
	let other = e.target.type == 'date' ? 'time' : 'date'

	if (options.hide !== other && pickers[other].value == '') {
		return (false)
	}

	Telegram.WebApp.MainButton.show()
}

function sendDateTime () {
	var timestamp = pickers.date.value
		? new Date(pickers.date.value)
		: new Date()

	var [ h, m ] = pickers.time.value.split(':')
	timestamp.setHours(h || 0, m || 0)

	var data = timestamp.getTime()+'_'+timestamp.getTimezoneOffset()
	Telegram.WebApp.sendData(data)
}

function init () {
	setupOptions()

	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Ok')
		.onClick(sendDateTime)
}

document.addEventListener('DOMContentLoaded', init)
