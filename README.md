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

### Examples

You can find examples in `examples` folder, and also find it below.

- [Telegraf JS](https://github.com/Expented/tgdtp/blob/main/examples/telegraf.js)

## Last words 

I you have questions, or you find an error, you can create issues. 
