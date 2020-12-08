const Discord = require('discord.js')
const client = new Discord.Client()

/**Todo
 *
 */


client.once('ready', () => {
    //ここから起動イベント
    console.log('SpaceServerApp 準備完了.｜v2.0')
    client.user.setActivity('Type C.help', { type: 'PLAYING' })
    client.channels.cache.get('785922633312632842').send({
        embed: {
            title: "コスモちゃんBot Ready",
            description: "v2.0  運用中.",
            color: 0xff8f2e,
            footer: {
                text: "CosomoProject｜開発元: なつ"
            }
        }
    })
    //ここまで起動イベント
})

//ここからhelp,info
client.on('message', message => {
    if(message.content === 'c.help') {
        message.channel.send({
            embed: {
                title: "コスモちゃんBot -ヘルプ",
                description: "Prefix = `c.`",
                color: 0xff8f2e,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "ある言葉に反応します。｜v2.0運用中"
                },
                fields: [
                    {
                        name: "**__基本コマンド__**",
                        value: "`about`,`ping`,`help`,`support`,`info`",
                        inline: true
                    },
                    {
                        name: "**__サーバーコマンド__**",
                        value: "`url`,`server`"
                    },
                ]
            }
        })
    }
    if(message.content === 'c.info') {
        message.channel.send({
            embed: {
                title: "最新情報",
                description: "コスモちゃんBotに関する最新情報です。",
                color: 0x249cd4,
                timestamp: new Date(),
                footer: {
                    text: "全ての情報はSpaceServer.netで確認できます。"
                },
                fields: [
                    {
                        name: "**Ver2.0リリース。コスモちゃんVerに**",
                        value: "シーズン2から登場する新キャラ『コスモちゃん』にSpaceServerAppも衣替え。\nコスモちゃんBotをよろしくお願いします。"
                    }
                ]
            }
        })
    }
})

//基本コマンド
client.on('message', message => {
    if(message.content === 'c.about') {
        message.channel.send({
            embed: {
                title: "概要",
                description: "このBotの詳細情報を表示中です。",
                color: 0xff8f2e,
                timestamp: new Date(),
                fields: [
                    {
                        name: "**バージョン:**",
                        value: "v2.0\n(Build 2.2020.0)",
                        inline: true
                    },
                    {
                        name: "**開発元:**",
                        value: "__ProjectCosomo__\n・Natu\n・syouyu",
                        inline: true
                    },
                    {
                        name: "**開発ライブラリ:**",
                        value: "discord.js v12.5.1",
                        inline: true
                    },
                    {
                        name: "**統計情報:**",
                        value: "```\n導入ライブラリ数: 1\n導入コマンド数: 9\n```"
                    }
                ]
            }
        })
    }
    if(message.content === 'c.ping') {
        message.channel.send({
            embed: {
                title: "Ping",
                description: "コスモちゃんは宇宙にいるのでPing値は高くなります。",
                color: 0xff8f2e,
                timestamp: new Date(),
                fields: [
                    {
                        name: "Pong!!!!!",
                        value: `${client.ws.ping}ms.`
                    }
                ]
            }
        })
    }
    if(message.content === 'c.support') {
        message.channel.send({
            embed: {
                title: "サポート",
                description: "困ったときは",
                color: 0xff8f2e,
                timestamp: new Date(),
                fields: [
                    {
                        name: "**宇宙鯖でお困りの方:**",
                        value: "スタッフへメンションでお知らせください。"
                    },
                    {
                        name: "**コスモちゃんBotでお困りの方:**",
                        value: " \@natu_9 にメンションでお知らせください。"
                    },
                    {
                        name: "**HackCamの誤BANを解除申請:**",
                        value: " \#異議申し立て までどうぞ。"
                    }
                ]
            }
        })
    }
})

//ここからサーバーコマンド
client.on('message', message => {
    if(message.content === 'c.url') {
        message.channel.send({
            embed: {
                title: "Url",
                color: 0xff8f2e,
                timestamp: new Date(),
                fields: [
                    {
                        name: "ip/ポート",
                        value: "spaceserver.tokyo｜19132"
                    },
                    {
                        name: "公式ホームページ",
                        value: "https://yurisi.space/"
                    },
                    {
                        name: "公式Discord",
                        value: "https://discord.gg/F3C4QJV"
                    },
                    {
                        name: "公式Lobi",
                        value: "https://lobi.co/invite/np33ur"
                    },
                    {
                        name: "公式開発ブログ",
                        value: "https://yurisi.space/blog/"
                    },
                    {
                        name: "民営Wiki",
                        value: "https://seesaawiki.jp/spaceserver_net/"
                    },
                    {
                        name: "民営Discord",
                        value: "https://discord.gg/RShPs45jF3"
                    },
                    {
                        name: "R18-Discord\n__参加は自己責任__",
                        value: "https://discord.gg/88p7U8B"
                    },
                ]
            }
        })
    }
    if(message.content === 'c.server') {
        message.channel.send({
            embed: {
                title: "サーバー統計情報",
                description: "宇宙鯖の詳細情報を表示中です。",
                color: 0xff8f2e,
                timestamp: new Date(),
                footer: {
                    text: "レポート最終更新:2020/12/09"
                },
                fields: [
                    {
                        name: "**IP/ポート**",
                        value: "spaceserver.tokyo｜19132",
                    },
                    {
                        name: "**統計レポート**",
                        value: "```最大オンライン人数:19\n現在のBAN者:149人\n誤BAN数:10\nDiscordAllMenber:611\nDiscordBot:18\n現在の統計数位:良い\n宇宙鯖稼働率:100%\n宇宙製Bot稼働率:40%(2/6)\n最近のbump数:0(最悪水準)\n最近のネタBAN率:4%\n最近のパチンコプレイ率:ゆりしー-5%\nあぱ-5%(良い水準)\n最近の課金額:0円\n最後の課金者:ApateticFoil114様(20000円)\n```",
                    },
                    {
                        name: "**End-次のレポート時刻**",
                        value: "2020/12/26"
                    }
                ]
            }
        })
    }
})


//ここから秘密の言葉
client.on('message', (message) => {
    if(message.content === 'ぱちんかす' && !message.author.bot) message.reply('> パチンコ進捗どうですか？\n> は？負けた？\n> 宇宙鯖のためにもっと回せ')
    if(message.content === '160gb' && !message.author.bot) message.reply('https://youtu.be/iBlMaO_QbJg\n\n')
    if(message.content === 'せやなどーなつ' && !message.author.bot) message.reply('> お酒は人の本性を暴く。覚えといて。')
    if(message.content === '魔法' && !message.author.bot) message.reply('> SLOT魔法少女まどか☆マギ2\nhttps://1geki.jp/slot/s_madomagi2/')
    //ここからBAN
    if(message.content === 'はいめるばん' && !message.author.bot) message.reply('> Haimeruban!\n> 現在、BAN**3回**・Kick**113回**(2020/12/09現在)')
    if(message.content === 'はいゆりしばん' && !message.author.bot) message.reply('> Haiyurisiban!\n> 現在、BAN**1回**・Kick**15回**・警告**27個**(2020/11/26現在)')
    if(message.content === 'はいあぱばん' && !message.author.bot) message.reply('> HaiApaban!\n> 現在、BAN**0回**・Kick**28回**(2020/11/26現在)')
    if(message.content === 'はいねむけばん' && !message.author.bot) message.reply('> Hainemukeban!\n> 現在、BAN**1回**・Kick**150回**(2020/11/26現在)')
    if(message.content === 'はいたらこばん' && !message.author.bot) message.reply('> Haitarakoban!\n> 現在、BAN**0回**・Kick**0回**(2020/12/09現在)')
  })
//ここまで
