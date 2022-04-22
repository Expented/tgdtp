# tgdtp

## What's this?

Time is an Telegram WebBot timezone picker. With it, you can make a easy choice of time zone for your bot. Please read the license before use.

## Getting Started

Send message from bot to user with `web_app` type button. Process event `message` with `web_app_data` field, which will contain `timespamp` and `timezoneOffset`.

```js
wep_app_data: {
 button_text: 'test', 
 data: '1649812020000_-240' 
 }
```
This is example of `web_app_data`. In this case `timespamp` is `1649812020000`, and `timezoneOffset`is `-240`. 
 

Important: Do not use an inline keyboard to open this application.

### Examples

You can find examples in `examples` folder, and also find it below.

- [Telegraf JS](https://github.com/Expented/tgdtp/blob/main/examples/telegraf.js)
