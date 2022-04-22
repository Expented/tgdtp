var values = {
	date: null,
	time: null
}

function init () {
	var datepickerEl = document.querySelector('.datepicker')
	var timepickerEl = document.querySelector('.timepicker')

	M.Datepicker.init(datepickerEl, {
		onSelect: selectHandler,
		autoClose: true
	})
	M.Timepicker.init(timepickerEl, {
		defaultTime: 'now',
		twelveHour: false,
		onSelect: selectHandler,
		autoClose: true
	})

	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Ok')
		.onClick(sendDateTime)
}

function selectHandler () {
	let isDate = arguments.length == 1

	values[isDate ? 'date' : 'time'] = isDate
		? arguments[0]
		: [ ...arguments ]
	
	if (!values[isDate ? 'time' : 'date']) {
		return (false)
	}

	Telegram.WebApp.MainButton.show()
}

function sendDateTime () {
	var timestamp = values.date.setHours(values.time[0], values.time[1])
	var timezoneOffset = values.date.getTimezoneOffset()
	
	Telegram.WebApp.sendData(timestamp+'_'+timezoneOffset)
}

document.addEventListener('DOMContentLoaded', init)