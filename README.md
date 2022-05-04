# tgdtp

## What's this?

Tgdtp is an Telegram Web App date and time picker. With it, you can make a easy choice of date and time for your bot. Please read the license before use.

## Getting Started

Send message from bot to user with `web_app` type button link to expented.github.io/tgdtp/. Process event `message` with `web_app_data` field, which will contain `timespamp` and `timezoneOffset`.

```js
web_app_data: {
  button_text: 'test', 
  data: '1649812020000_-240' 
}
```
This is example of `web_app_data`. In this case `timespamp` is `1649812020000`, and `timezoneOffset`is `-240`. 
 

Important: Do not use an inline keyboard to open this application.

### Parametrs 

You also can use parametrs to make picker more handy. Here is list of avalibule parametrs: 

- hide 
- max
- max

Let's talk about all of parametrs. With `hide` you can hide one of fieds, `date` or `time`. By using `min` you can't choose date less than specified, with `max` you can't select a date more than then specified. Below you can see some examples. 

1. https://expented.github.io/tgdtp/?hide=time&max=2023-04-01 | Hidden field with time selection, maximum date for selection is 01.04.2023 
2. https://expented.github.io/tgdtp/?hide=date | Hidden field with date selection 
3. https://expented.github.io/tgdtp/?min=2022-04-01 | Minimum date for selection is 01.04.2022 
4. https://expented.github.io/tgdtp/?min=2022-01-01&max=2023-01-01 | Minimum date for selection in 01.01.2022, maximum date for selection is 01.01.2023 

### Examples

You can find examples in `examples` folder, and also find it below.

- [Telegraf JS](https://github.com/Expented/tgdtp/blob/main/examples/telegraf.js)

## Last words 

I you have questions, or you find an error, you can create issues. 

Made with ❤️ by Expented
