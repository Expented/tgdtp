const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
	var button = {
		text: 'go',
		web_app: {
			url: 'https://expented.github.io/tgdtp/'
		}
	}
	var print = 'choose date and time'

	ctx.reply(print, {
		reply_markup: JSON.stringify({
			resize_keyboard: true,
			keyboard: [
				[ button ]
			]
		})
	})
})

bot.on('message', (ctx) => {
	if (ctx.message.web_app_data) {
		var data = ctx.message.web_app_data.data
		// telegram for android send web_app_data in format '{"data":"123_123"}'
		if (data.indexOf('data') !== -1) {
			data = JSON.parse(data).data
		}

		var [ timespamp, timezoneOffset ] = data.split('_')
		timespamp = parseInt(timespamp)

		var clientOffset = parseInt(timezoneOffset) * 60 * 1000
		var serverOffset = (new Date()).getTimezoneOffset() * 60 * 1000
		var offset = clientOffset - serverOffset
		
		var print = 'in user timezone: ' + (new Date(timespamp)).toLocaleString() + '\n'
		print += 'in UTC timezone: ' + (new Date(timespamp + clientOffset)).toLocaleString() + '\n'
		print += 'in server timezone: ' + (new Date(timespamp + offset)).toLocaleString()
		
		ctx.reply(print)
	}
})

bot.launch()