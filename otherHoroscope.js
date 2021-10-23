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


const otherHoroscope = new Scene('otherHoroscope',
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
        case 'Овен':
        case 'Овен.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');
    
            function sendMessage1Aries() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Овнов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Aries, 0);
            function sendMessage2Aries() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Овнов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Aries, 1500);
            function sendMessage3Aries() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Овнов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Aries, 3000);
            function sendMessage4Aries() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Овнов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Aries, 4500);
        break;
        case 'телец':
        case 'телец.':
        case 'Телец♉':
        case 'Телец':
        case 'Телец.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Taurus() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Тельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Taurus, 0);
            function sendMessage2Taurus() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Тельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Taurus, 1500);
            function sendMessage3Taurus() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Тельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Taurus, 3000);
            function sendMessage4Taurus() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(2) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Тельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Taurus, 4500);
        break;
        case 'близнецы':
        case 'близнецы.':
        case 'Близнецы♊':
        case 'Близнецы':
        case 'Близнецы.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Gemini() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Близнецов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Gemini, 0);
            function sendMessage2Gemini() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Близнецов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Gemini, 1500);
            function sendMessage3Gemini() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Близнецов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Gemini, 3000);
            function sendMessage4Gemini() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Близнецов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Gemini, 4500);
        break;
        case 'рак':
        case 'рак.':
        case 'Рак♋':
        case 'Рак':
        case 'Рак.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Cancer() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Раков на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Cancer, 0);
            function sendMessage2Sagittarius() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Раков на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Cancer, 1500);
            function sendMessage3Cancer() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Раков на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Cancer, 3000);
            function sendMessage4Cancer() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(3) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Раков на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Cancer, 4500);
        break;
        case 'лев':
        case 'лев.':
        case 'Лев♌':
        case 'Лев':
        case 'Лев.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Leo() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Львов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Leo, 0);
            function sendMessage2Leo() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Львов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Leo, 1500);
            function sendMessage3Leo() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Львов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Leo, 3000);
            function sendMessage4Leo() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Львов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Leo, 4500);
        break;
        case 'дева':
        case 'дева.':
        case 'Дева♍':
        case 'Дева':
        case 'Дева.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Virgo() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Дев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Virgo, 0);
            function sendMessage2Virgo() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Дев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Virgo, 1500);
            function sendMessage3Virgo() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Дев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Virgo, 3000);
            function sendMessage4Virgo() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(4) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Дев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Virgo, 4500);
        break;
        case 'весы':
        case 'весы.':
        case 'Весы♎':
        case 'Весы':
        case 'Весы.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Libra() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Весов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Libra, 0);
            function sendMessage2Libra() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Весов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Libra, 1500);
            function sendMessage3Libra() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Весов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Libra, 3000);
            function sendMessage4Libra() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Весов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Libra, 4500);
        break;
        case 'Скорпион':
        case 'Скорпион.':
        case 'Скорпион♏':
        case 'Скорпион':
        case 'Скорпион.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Scorpio() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Скорпионов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Scorpio, 0);
            function sendMessage2Scorpio() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Скорпионов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Scorpio, 1500);
            function sendMessage3Scorpio() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Скорпионов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Scorpio, 3000);
            function sendMessage4Scorpio() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(5) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Скорпионов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Scorpio, 4500);
        break;
        case 'стрелец':
        case 'стрелец.':
        case 'Стрелец♐':
        case 'Стрелец':
        case 'Стрелец.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Sagittarius() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Стрельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Sagittarius, 0);
            function sendMessage2Sagittarius() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Стрельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Sagittarius, 1500);
            function sendMessage3Sagittarius() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Стрельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Sagittarius, 3000);
            function sendMessage4Sagittarius() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Стрельцов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Sagittarius, 4500);
        break;
        case 'козерог':
        case 'козерог.':
        case 'Козерог♑':
        case 'Козерог':
        case 'Козерог.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Capricorn() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Козерогов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Capricorn, 0);
            function sendMessage2Capricorn() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Козерогов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Capricorn, 1500);
            function sendMessage3Capricorn() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Козерогов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Capricorn, 3000);
            function sendMessage4Capricorn() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(6) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Козерогов на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Capricorn, 4500);
        break;
        case 'водолей':
        case 'водолей.':
        case 'Водолей♒':
        case 'Водолей':
        case 'Водолей.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Aquarius() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Водолеев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Aquarius, 0);
            function sendMessage2Aquarius() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Водолеев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Aquarius, 1500);
            function sendMessage3Aquarius() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Водолеев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Aquarius, 3000);
            function sendMessage4Aquarius() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(1) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Водолеев на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Aquarius, 4500);
        break;
        case 'рыбы':
        case 'рыбы.':
        case 'Рыбы♓':
        case 'Рыбы':
        case 'Рыбы.':
            var todayDay = moment().format('DD');
            var todayMonth = moment().format('MMM');
            var dayWeek = moment().format('dddd');
            // var today = moment().format('ll'); 
            // var dayWeek = moment().format('dddd')
    // var tomorrow = moment().add(1, 'days').format('ll');
    // var startWeek = moment().startOf("isoWeek").format('ll');
    // var endWeek = moment().startOf("isoWeek").add(6, "days").format('ll');

            function sendMessage1Pisces() {
                axios.get('https://www.newsler.ru/horoscope/anti').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈АнтиГороскоп Рыб на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Pisces, 0);
            function sendMessage2Pisces() {
                axios.get('https://www.newsler.ru/horoscope/business').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Бизнес Гороскоп Рыб на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage2Pisces, 1500);
            function sendMessage3Pisces() {
                axios.get('https://www.newsler.ru/horoscope/health').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Гороскоп Здоровья Рыб на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            } 
            setTimeout(sendMessage3Pisces, 3000);
            function sendMessage4Pisces() {
                axios.get('https://www.newsler.ru/horoscope/love').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div > div.middle > div.container.clearfix > div.fl-w > div.side-left > div:nth-child(7) > div:nth-child(2) > div > div').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♈Любовный Гороскоп Рыб на ${todayDay} ${todayMonth}(${dayWeek}).\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Pisces, 4500);
        break;
    }
  }
);


const session = new Session();
const stage = new Stage(otherHoroscope);

bot.use(session.middleware());
bot.use(stage.middleware());


module.exports = otherHoroscope