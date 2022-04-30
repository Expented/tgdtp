const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
	var defaultButton = {
		text: 'default',
		web_app: {
			url: 'https://expented.github.io/tgdtp/'
		}
	}
	var hideTimeButton = {
		text: 'only date',
		web_app: {
			url: 'https://expented.github.io/tgdtp/?hide=time'
		}
	}
	var betweenButton = {
		text: 'May 1 to May 20',
		web_app: {
			url: 'https://expented.github.io/tgdtp/?min=2022-05-01&max=2022-05-20'
		}
	}

	var print = 'choose date and time'

	ctx.reply(print, {
		reply_markup: JSON.stringify({
			resize_keyboard: true,
			keyboard: [
				[ defaultButton, hideTimeButton ],
				[ betweenButton ]
			]
		})
	})
})

bot.on('web_app_data', (ctx) => {
	var [ timespamp, timezoneOffset ] = ctx.message.web_app_data.data.split('_')
	timespamp = parseInt(timespamp)

	var clientOffset = parseInt(timezoneOffset) * 60 * 1000
	var serverOffset = (new Date()).getTimezoneOffset() * 60 * 1000
	var offset = serverOffset - clientOffset

	var print = 'in user timezone: ' + (new Date(timespamp + offset)).toLocaleString() + '\n'
	print += 'in server timezone: ' + (new Date(timespamp)).toLocaleString()

	ctx.reply(print)
})

bot.launch()
