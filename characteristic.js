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


const characteristic = new Scene('characteristic',
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
        function sendMessage1Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`♈Характеристика знака "Овен".\n\n${text}`)
            })
        } 
        setTimeout(sendMessage1Aries, 0);
        function sendMessage2Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        } 
        setTimeout(sendMessage2Aries, 1500);
        function sendMessage3Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        } 
        setTimeout(sendMessage3Aries, 3000);
        function sendMessage4Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`🙍‍♂️МУЖЧИНА-ОВЕН.\n\n${text}`)
            })
        }  
        setTimeout(sendMessage4Aries, 4500);
        function sendMessage5Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        }
        setTimeout(sendMessage5Aries, 6000);
        function sendMessage6Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`🙍ЖЕНЩИНА-ОВЕН.\n\n${text}`)
            })
        }
        setTimeout(sendMessage6Aries, 7500);
        function sendMessage7Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        }  
        setTimeout(sendMessage7Aries, 9000);
        function sendMessage8Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`🔱СОВМЕСТИМОСТЬ ОВНА С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
            })
        }  
        setTimeout(sendMessage8Aries, 10500);
        function sendMessage9Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        } 
        setTimeout(sendMessage9Aries, 13000);
        function sendMessage10Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ ОВНА.\n\n${text}`)
            })
        } 
        setTimeout(sendMessage10Aries, 14500);
        function sendMessage11Aries() {
            axios.get('https://www.elle.ru/astro/aries').then(html => {
                const $ = cheerio.load(html.data)
                var text = ''
                $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                    text += `${$(elem).text()}\n`
                })
                ctx.reply(`${text}`)
            })
        } 
        setTimeout(sendMessage11Aries, 16000); 
        break;
        case 'телец':
        case 'телец.':
        case 'Телец♉':
        case 'Телец':
        case 'Телец.':
            function sendMessage1Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♉Характеристика знака "Телец".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Taurus, 0);
            function sendMessageTaurus2() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Taurus, 1500);
            function sendMessage3Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-ТЕЛЕЦ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage3Taurus, 3000);
            function sendMessage4Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-ТЕЛЕЦ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage4Taurus, 4500);
            function sendMessage5Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage5Taurus, 6000);
            function sendMessage6Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ ТЕЛЬЦА С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage6Taurus, 7500);
            function sendMessage7Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage7Taurus, 9000);
            function sendMessage8Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ ТЕЛЕЦ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage8Taurus, 10500); 
            function sendMessage9Taurus() {
                axios.get('https://www.elle.ru/astro/taurus').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Taurus, 12000);
        break;
        case 'близнецы':
        case 'близнецы.':
        case 'Близнецы♊':
        case 'Близнецы':
        case 'Близнецы.':
            function sendMessage1Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♊Характеристика знака "Близнецы".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Gemini, 0);
            function sendMessage2Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Gemini, 1500);
            function sendMessage3Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Gemini, 3000);
            function sendMessage4Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-БЛИЗНЕЦЫ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Gemini, 4500);
            function sendMessage5Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Gemini, 6000);
            function sendMessage6Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage6Gemini, 7500);
            function sendMessage7Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-БЛИЗНЕЦЫ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage7Gemini, 9000);
            function sendMessage8Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Gemini, 10500);
            function sendMessage9Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "БЛИЗНЕЦОВ" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage9Gemini, 13000);
            function sendMessage10Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Gemini, 14500);
            function sendMessage11Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Gemini, 16000); 
            function sendMessage12Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "БЛИЗНЕЦЫ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Gemini, 17500);
            function sendMessage13Gemini() {
                axios.get('https://www.elle.ru/astro/gemini').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Gemini, 19000);
        break;
        case 'рак':
        case 'рак.':
        case 'Рак♋':
        case 'Рак':
        case 'Рак.':
            function sendMessage1Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♋Характеристика знака "Рак".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Cancer, 0);
            function sendMessage2Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Cancer, 1500);
            function sendMessage3Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Cancer, 3000);
            function sendMessage4Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-РАК.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Cancer, 4500);
            function sendMessage5Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Cancer, 6000);
            function sendMessage6Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-РАК.\n\n${text}`)
                })
            }
            setTimeout(sendMessage6Cancer, 7500);
            function sendMessage7Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Cancer, 9000);
            function sendMessage8Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Cancer, 10500);
            function sendMessage9Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Cancer, 13000);
            function sendMessage10Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "РАКА" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage10Cancer, 14500);
            function sendMessage11Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Cancer, 16000); 
            function sendMessage12Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage12Cancer, 17500);
            function sendMessage13Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Cancer, 19000);
            function sendMessage14Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "РАК".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage14Cancer, 20500);
            function sendMessage15Cancer() {
                axios.get('https://www.elle.ru/astro/cancer').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage15Cancer, 23000);
        break;
        case 'лев':
        case 'лев.':
        case 'Лев♌':
        case 'Лев':
        case 'Лев.':
            function sendMessage1Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♌Характеристика знака "Лев".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Leo, 0);
            function sendMessage2Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Leo, 1500);
            function sendMessage3Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Leo, 3000);
            function sendMessage4Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Leo, 4500);
            function sendMessage5Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Leo, 6000);
            function sendMessage6Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-ЛЕВ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage6Leo, 7500);
            function sendMessage7Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Leo, 9000);
            function sendMessage8Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Leo, 10500);
            function sendMessage9Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Leo, 13000);
            function sendMessage10Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-ЛЕВ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage10Leo, 14500);
            function sendMessage11Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Leo, 16000); 
            function sendMessage12Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "ЛЬВА" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Leo, 17500);
            function sendMessage13Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "ЛЕВ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage13Leo, 19000);
            function sendMessage14Leo() {
                axios.get('https://www.elle.ru/astro/leo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage14Leo, 20500);
        break;
        case 'дева':
        case 'дева.':
        case 'Дева♍':
        case 'Дева':
        case 'Дева.':
            function sendMessage1Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♍Характеристика знака "Дева".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Virgo, 0);
            function sendMessage2Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Virgo, 1500);
            function sendMessage3Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Virgo, 3000);
            function sendMessage4Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Virgo, 4500);
            function sendMessage5Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-ДЕВА.\n\n${text}`)
                })
            }
            setTimeout(sendMessage5Virgo, 6000);
            function sendMessage6Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage6Virgo, 7500);
            function sendMessage7Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Virgo, 9000);
            function sendMessage8Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-ДЕВА.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage8Virgo, 10500);
            function sendMessage9Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Virgo, 13000);
            function sendMessage10Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Virgo, 14500);
            function sendMessage11Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "ДЕВЫ" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage11Virgo, 16000); 
            function sendMessage12Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage12Virgo, 17500);
            function sendMessage13Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Virgo, 19000);
            function sendMessage14Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "ДЕВА".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage14Virgo, 20500);
            function sendMessage15Virgo() {
                axios.get('https://www.elle.ru/astro/virgo').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage15Virgo, 23000);
        break;
        case 'весы':
        case 'весы.':
        case 'Весы♎':
        case 'Весы':
        case 'Весы.':
            function sendMessage1Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♎Характеристика знака "Весы".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Libra, 0);
            function sendMessage2Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Libra, 1500);
            function sendMessage3Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Libra, 3000);
            function sendMessage4Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-ВЕСЫ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage4Libra, 4500);
            function sendMessage5Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Libra, 6000);
            function sendMessage6Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage6Libra, 7500);
            function sendMessage7Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-РАК.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage7Libra, 9000);
            function sendMessage8Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Libra, 10500);
            function sendMessage9Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Libra, 13000);
            function sendMessage10Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "ВЕСОВ" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage10Libra, 14500);
            function sendMessage11Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Libra, 16000); 
            function sendMessage12Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "РАК".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Libra, 17500);
            function sendMessage13Libra() {
                axios.get('https://www.elle.ru/astro/libra').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Libra, 19000);
        break;
        case 'Скорпион':
        case 'Скорпион.':
        case 'Скорпион♏':
        case 'Скорпион':
        case 'Скорпион.':
            function sendMessage1Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♏Характеристика знака "Скорпион".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Scorpio, 0);
            function sendMessage2Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Scorpio, 1500);
            function sendMessage3Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Scorpio, 3000);
            function sendMessage4Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Scorpio, 4500);
            function sendMessage5Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Scorpio, 6000);
            function sendMessage6Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-СКОРПИОН.\n\n${text}`)
                })
            }
            setTimeout(sendMessage6Scorpio, 7500);
            function sendMessage7Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Scorpio, 9000);
            function sendMessage8Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Scorpio, 10500);
            function sendMessage9Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-СКОРПИОН.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage9Scorpio, 13000);
            function sendMessage10Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "СКОРПИОНА" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage10Scorpio, 14500);
            function sendMessage11Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Scorpio, 16000); 
            function sendMessage12Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "СКОРПИОН".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Scorpio, 17500);
            function sendMessage13Scorpio() {
                axios.get('https://www.elle.ru/astro/scorpio').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Scorpio, 19000);
        break;
        case 'стрелец':
        case 'стрелец.':
        case 'Стрелец♐':
        case 'Стрелец':
        case 'Стрелец.':
            function sendMessage1Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♐Характеристика знака "Стрелец".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Sagittarius, 0);
            function sendMessage2Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Sagittarius, 1500);
            function sendMessage3Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Sagittarius, 3000);
            function sendMessage4Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Sagittarius, 4500);
            function sendMessage5Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-СТРЕЛЕЦ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage5Sagittarius, 6000);
            function sendMessage6Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage6Sagittarius, 7500);
            function sendMessage7Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Sagittarius, 9000);
            function sendMessage8Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Sagittarius, 10500);
            function sendMessage9Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-СТРЕЛЕЦ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage9Sagittarius, 13000);
            function sendMessage10Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Sagittarius, 14500);
            function sendMessage11Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Sagittarius, 16000); 
            function sendMessage12Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "СТРЕЛЬЦА" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Sagittarius, 17500);
            function sendMessage13Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Sagittarius, 19000);
            function sendMessage14Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "СТРЕЛЕЦ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage14Sagittarius, 20500);
            function sendMessage15Sagittarius() {
                axios.get('https://www.elle.ru/astro/sagittarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage15Sagittarius, 23000);
        break;
        case 'козерог':
        case 'козерог.':
        case 'Козерог♑':
        case 'Козерог':
        case 'Козерог.':
            function sendMessage1Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♑Характеристика знака "Козерог".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Capricorn, 0);
            function sendMessage2Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Capricorn, 1500);
            function sendMessage3Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Capricorn, 3000);
            function sendMessage4Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Capricorn, 4500);
            function sendMessage5Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Capricorn, 6000);
            function sendMessage6Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-КОЗЕРОГ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage6Capricorn, 7500);
            function sendMessage7Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Capricorn, 9000);
            function sendMessage8Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-КОЗЕРОГ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage8Capricorn, 10500);
            function sendMessage9Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Capricorn, 13000);
            function sendMessage10Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Capricorn, 14500);
            function sendMessage11Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Capricorn, 16000); 
            function sendMessage12Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "КОЗЕРОГА" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Capricorn, 17500);
            function sendMessage13Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Capricorn, 19000);
            function sendMessage14Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage14Capricorn, 20500);
            function sendMessage15Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "КОЗЕРОГ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage15Capricorn, 23000);
            function sendMessage16Capricorn() {
                axios.get('https://www.elle.ru/astro/capricorn').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(20)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage16Capricorn, 24500);
        break;
        case 'водолей':
        case 'водолей.':
        case 'Водолей♒':
        case 'Водолей':
        case 'Водолей.':
            function sendMessage1Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♒Характеристика знака "Водолей".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Aquarius, 0);
            function sendMessage2Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Aquarius, 1500);
            function sendMessage3Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Aquarius, 3000);
            function sendMessage4Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Aquarius, 4500);
            function sendMessage5Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(6)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-ВОДОЛЕЙ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage5Aquarius, 6000);
            function sendMessage6Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage6Aquarius, 7500);
            function sendMessage7Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Aquarius, 9000);
            function sendMessage8Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(10)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-ВОДОЛЕЙ.\n\n${text}`)
                })
            }  
            setTimeout(sendMessage8Aquarius, 10500);
            function sendMessage9Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage9Aquarius, 13000);
            function sendMessage10Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Aquarius, 14500);
            function sendMessage11Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(13)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage11Aquarius, 16000); 
            function sendMessage12Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "ВОДОЛЕЯ" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage12Aquarius, 17500);
            function sendMessage13Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Aquarius, 19000);
            function sendMessage14Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(17)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage14Aquarius, 20500);
            function sendMessage15Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "ВОДОЛЕЙ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage15Aquarius, 23000);
            function sendMessage16Aquarius() {
                axios.get('https://www.elle.ru/astro/aquarius').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage16Aquarius, 24500);
        break;
        case 'рыбы':
        case 'рыбы.':
        case 'Рыбы♓':
        case 'Рыбы':
        case 'Рыбы.':
            function sendMessage1Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(1)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`♓Характеристика знака "Рыбы".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage1Pisces, 0);
            function sendMessage2Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(2)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage2Pisces, 1500);
            function sendMessage3Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(3)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage3Pisces, 3000);
            function sendMessage4Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(4)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage4Pisces, 4500);
            function sendMessage5Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(5)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }
            setTimeout(sendMessage5Pisces, 6000);
            function sendMessage6Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(7)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍‍♂️МУЖЧИНА-РЫБЫ.\n\n${text}`)
                })
            }
            setTimeout(sendMessage6Pisces, 7500);
            function sendMessage7Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(8)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage7Pisces, 9000);
            function sendMessage8Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(9)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            }  
            setTimeout(sendMessage8Pisces, 10500);
            function sendMessage9Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(11)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🙍ЖЕНЩИНА-РЫБЫ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage9Pisces, 13000);
            function sendMessage10Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(12)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage10Pisces, 14500);
            function sendMessage11Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(14)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`🔱СОВМЕСТИМОСТЬ "РЫБ" С ДРУГИМИ ЗНАКАМИ.\n\n${text}`)
                })
            } 
            setTimeout(sendMessage11Pisces, 16000); 
            function sendMessage12Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(15)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage12Pisces, 17500);
            function sendMessage13Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(16)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage13Pisces, 19000);
            function sendMessage14Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(18)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`📺ЗНАМЕНИТОСТИ, РОДИВШИЕСЯ ПОД ЗНАКОМ "РЫБЫ".\n\n${text}`)
                })
            } 
            setTimeout(sendMessage14Pisces, 20500);
            function sendMessage15Pisces() {
                axios.get('https://www.elle.ru/astro/pisces').then(html => {
                    const $ = cheerio.load(html.data)
                    var text = ''
                    $('body > div.container.container3 > div:nth-child(4) > div.c2.ntm.nbm.rm > div:nth-child(1) > div > div.articleParagraph.articleParagraph_dropCap.block-js > p:nth-child(19)').each((i, elem) => {
                        text += `${$(elem).text()}\n`
                    })
                    ctx.reply(`${text}`)
                })
            } 
            setTimeout(sendMessage15Pisces, 23000);
        break;
    }
  }
);


const session = new Session();
const stage = new Stage(characteristic);

bot.use(session.middleware());
bot.use(stage.middleware());


module.exports = characteristic