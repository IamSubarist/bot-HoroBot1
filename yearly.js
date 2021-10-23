// const VkBot = require('node-vk-bot-api');
// const bot = new VkBot({
//     token: '6188922a26b51a22c094c4bca66864277f5499d7cf366fdde7c3a6d5b76a51ceb95661fcf6a73c0a5f431'
// });

// const Markup = require('node-vk-bot-api/lib/markup');
// const Session = require('node-vk-bot-api/lib/session');
// const Scene = require('node-vk-bot-api/lib/scene');
// const Stage = require('node-vk-bot-api/lib/stage');

// const axios = require('axios')
// const cheerio = require('cheerio')

// const moment = require("moment");
// moment.locale('ru');


// // const yearly = new Scene('yearly',
// //   (ctx) => {
// //     ctx.scene.next();
// //     ctx.reply('Отправь мне свой знак зодиака🌠', null, Markup.keyboard([
// //         [ Markup.button('Овен♈', 'default'), Markup.button('Телец♉', 'default'), Markup.button('Близнецы♊', 'default')],
// //         [ Markup.button('Рак♋', 'default'), Markup.button('Лев♌', 'default'), Markup.button('Дева♍', 'default')],
// //         [ Markup.button('Весы♎', 'default'), Markup.button('Скорпион♏', 'default'), Markup.button('Стрелец♐', 'default')],
// //         [ Markup.button('Козерог♑', 'default'), Markup.button('Водолей♒', 'default'), Markup.button('Рыбы♓', 'default')],
// //       ])
// //       .oneTime()
// //       );
// //   },
// //   (ctx) => {
// //     ctx.scene.leave();
    
// //     switch (ctx.message.text) {
// //         case 'овен':
// //         case 'овен.':
// //         case 'Овен♈':
// //         case 'Овен.':   
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/aries/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♈Гороскоп Овнов на текущий месяц(${todayMonth}).\n\n${text}`)
// //             })
// //         break;
// //         case 'телец':
// //         case 'телец.':
// //         case 'Телец♉':
// //         case 'Телец':
// //         case 'Телец.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/taurus/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♉Гороскоп Тельцов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'близнецы':
// //         case 'близнецы.':
// //         case 'Близнецы♊':
// //         case 'Близнецы':
// //         case 'Близнецы.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/gemini/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♊Гороскоп Близнецов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'рак':
// //         case 'рак.':
// //         case 'Рак♋':
// //         case 'Рак':
// //         case 'Рак.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/cancer/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♋Гороскоп Раков на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'лев':
// //         case 'лев.':
// //         case 'Лев♌':
// //         case 'Лев':
// //         case 'Лев.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/leo/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♌Гороскоп Львов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'дева':
// //         case 'дева.':
// //         case 'Дева♍':
// //         case 'Дева':
// //         case 'Дева.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/virgo/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♍Гороскоп Дев на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'весы':
// //         case 'весы.':
// //         case 'Весы♎':
// //         case 'Весы':
// //         case 'Весы.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/libra/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♎Гороскоп Весов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'Скорпион':
// //         case 'Скорпион.':
// //         case 'Скорпион♏':
// //         case 'Скорпион':
// //         case 'Скорпион.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/scorpio/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♏Гороскоп Скорпионов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'стрелец':
// //         case 'стрелец.':
// //         case 'Стрелец♐':
// //         case 'Стрелец':
// //         case 'Стрелец.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/sagittarius/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♐Гороскоп Стрельцов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'козерог':
// //         case 'козерог.':
// //         case 'Козерог♑':
// //         case 'Козерог':
// //         case 'Козерог.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/capricorn/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♑Гороскоп Козерогов на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'водолей':
// //         case 'водолей.':
// //         case 'Водолей♒':
// //         case 'Водолей':
// //         case 'Водолей.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/aquarius/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♒Гороскоп Водолеев на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //         case 'рыбы':
// //         case 'рыбы.':
// //         case 'Рыбы♓':
// //         case 'Рыбы':
// //         case 'Рыбы.':
// //             var todayMonth = moment().format('MMMM'); 
// //             // var startWeek = moment().startOf("isoWeek").format('ll');
// //             // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
// //     // var tomorrow = moment().add(1, 'days').format('ll');
// //     // var startWeek = moment().startOf("isoWeek").format('ll');
// //     // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

// //             axios.get('https://www.elle.ru/astro/pisces/year').then(html => {
// //                 const $ = cheerio.load(html.data)
// //                 var text = ''
// //                 $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div:nth-child(2) > div > p:nth-child(2)').each((i, elem) => {
// //                     text += `${$(elem).text()}\n`
// //                 })
// //                 ctx.reply(`♓Гороскоп Рыб на текущий месяц(${todayMonth}).\n\n${text}`)
// //         })
// //         break;
// //     }
// //   }
// // );


// const session = new Session();
// const stage = new Stage(yearly);

// bot.use(session.middleware());
// bot.use(stage.middleware());


// module.exports = yearly