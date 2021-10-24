const VkBot = require('node-vk-bot-api');
const bot = new VkBot({
    token: '6188922a26b51a22c094c4bca66864277f5499d7cf366fdde7c3a6d5b76a51ceb95661fcf6a73c0a5f431'
});

const Markup = require('node-vk-bot-api/lib/markup');
const Session = require('node-vk-bot-api/lib/session');
const Scene = require('node-vk-bot-api/lib/scene');
const Stage = require('node-vk-bot-api/lib/stage');

const axios = require('axios')
const cheerio = require('cheerio')

const moment = require("moment");
moment.locale('ru');

const fs = require('fs')
const path = require('path')

bot.startPolling();
console.log('\nThe bot has been successfully launched and ready to work.\n')

// **********************SCENE**********************

const daily = require('./daily.js')
const tomorrow = require('./tomorrow.js')
// const weekly = require('./weekly.js')
// const monthly = require('./monthly.js')
// const yearly = require('./yearly.js')
// const characteristic = require('./characteristic.js')
// const otherHoroscope = require('./otherHoroscope.js')

const session = new Session();
const stage = new Stage(daily, tomorrow, weekly);

bot.use(session.middleware());
bot.use(stage.middleware());

// **********************CODE**********************

const filePath = path.join(__dirname, 'users.txt')
bot.command('начать', ctx => {
    ctx.reply('Привет! Я - ГороБот, я могу рассказать тебе гороскоп твоего знака зодиака.🔮\nЧтобы начать работу со мной отправь мне "Гороскоп". Если думаешь, что буквы платные, можешь нажать на кнопку ниже😆\n\nПовторюсь. В дальнейшем, если собираешься использовать меня просто пиши мне "Гороскоп" или можешь отправь любой символ, тогда я пришлю тебе клавиатуру😉', null, Markup.keyboard([
            [Markup.button('Гороскоп🔮')],
            [Markup.button('Характеристика🔮')],
        ]).inline()
        )
    fs.appendFile(filePath, `https://vk.com/foaf.php?id=${ctx.message.peer_id}\n`, (err) =>{
        if (err) {
            throw err
        }
        // console.log('Update in file.');
    })
});

bot.command('на сегодня', (ctx) => {
    ctx.scene.enter('daily')
})

bot.command('на завтра', (ctx) => {
    ctx.scene.enter('tomorrow')
})

bot.command('на неделю', (ctx) => {
    ctx.scene.enter('weekly')
})

// bot.command('на месяц', (ctx) => {
//     ctx.scene.enter('monthly')
// })

// bot.command('на год', (ctx) => {
//     ctx.scene.enter('yearly')
// })

// bot.command(/подробный на сегодня/i, (ctx) => {
//     ctx.scene.enter('otherHoroscope')
// })

// bot.command(/характеристика/i, (ctx) => {
//     ctx.scene.enter('characteristic')
// })

bot.command(/гороскоп/i, (ctx) => {
    ctx.reply('Какой гороскоп вы хотите узнать?🔮', null, Markup.keyboard([
        [Markup.button('На сегодня', 'primary')],
        // [Markup.button('Подробный на сегодня', 'default')],
        [Markup.button('На завтра', 'default'), Markup.button('На неделю', 'default')]
      ])
      )
})

bot.command('', (ctx) => {
    ctx.reply('О! Хочешь узнать что про тебя говорят звёзды?? Жми на кнопку ниже😆', null, Markup.keyboard([
        [ Markup.button('Гороскоп🔮', 'primary')]
    ])
    )
})