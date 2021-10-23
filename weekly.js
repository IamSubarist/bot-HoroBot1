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


const weekly = new Scene('weekly',
  (ctx) => {
    ctx.scene.next();
    ctx.reply('Отправь мне свой знак зодиака🌠', null, Markup.keyboard([
        [ Markup.button('Овен♈', 'default'), Markup.button('Телец♉', 'default'), Markup.button('Близнецы♊', 'default')],
        [ Markup.button('Рак♋', 'default'), Markup.button('Лев♌', 'default'), Markup.button('Дева♍', 'default')],
        [ Markup.button('Весы♎', 'default'), Markup.button('Скорпион♏', 'default'), Markup.button('Стрелец♐', 'default')],
        [ Markup.button('Козерог♑', 'default'), Markup.button('Водолей♒', 'default'), Markup.button('Рыбы♓', 'default')],
      ])
      .oneTime()
      );
  },
  (ctx) => {
    ctx.scene.leave();
    
    switch (ctx.message.text) {
        case 'овен':
        case 'овен.':
        case 'Овен♈':
        case 'Овен.':    
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♈Гороскоп Овнов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
            })
        break;
        case 'телец':
        case 'телец.':
        case 'Телец♉':
        case 'Телец':
        case 'Телец.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♉Гороскоп Тельцов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'близнецы':
        case 'близнецы.':
        case 'Близнецы♊':
        case 'Близнецы':
        case 'Близнецы.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♊Гороскоп Близнецов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'рак':
        case 'рак.':
        case 'Рак♋':
        case 'Рак':
        case 'Рак.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♋Гороскоп Раков на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'лев':
        case 'лев.':
        case 'Лев♌':
        case 'Лев':
        case 'Лев.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♌Гороскоп Львов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'дева':
        case 'дева.':
        case 'Дева♍':
        case 'Дева':
        case 'Дева.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♍Гороскоп Дев на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'весы':
        case 'весы.':
        case 'Весы♎':
        case 'Весы':
        case 'Весы.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♎Гороскоп Весов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'Скорпион':
        case 'Скорпион.':
        case 'Скорпион♏':
        case 'Скорпион':
        case 'Скорпион.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♏Гороскоп Скорпионов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'стрелец':
        case 'стрелец.':
        case 'Стрелец♐':
        case 'Стрелец':
        case 'Стрелец.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♐Гороскоп Стрельцов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'козерог':
        case 'козерог.':
        case 'Козерог♑':
        case 'Козерог':
        case 'Козерог.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♑Гороскоп Козерогов на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'водолей':
        case 'водолей.':
        case 'Водолей♒':
        case 'Водолей':
        case 'Водолей.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(1) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♒Гороскоп Водолеев на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
        case 'рыбы':
        case 'рыбы.':
        case 'Рыбы♓':
        case 'Рыбы':
        case 'Рыбы.':
            var startWeek = moment().startOf("isoWeek").format('ll');
            var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            axios.get('https://www.newsler.ru/horoscope/week').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(2) > div > div').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♓Гороскоп Рыб на текущую неделю(${startWeek}(понедельник) - ${endWeek}(воскресение)).\n\n${text}`)
        })
        break;
    }
  }
);


const session = new Session();
const stage = new Stage(weekly);

bot.use(session.middleware());
bot.use(stage.middleware());


module.exports = weekly