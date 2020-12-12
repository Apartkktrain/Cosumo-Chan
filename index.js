const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()

const fetch = require('node-fetch')

/**
 * URLの引用機能,everyone&hereが使えちゃうので停止
 */

client.once('ready', () => {
  console.log('SpaceServerApp Ready.｜v1.5.0-a')
  client.user.setActivity('!.help｜spaceserver.tokyo', { type: 'WATCHING' })
})

client.on('message', message => {
  if(message.content === '!.help') {
    message.channel.send({
      embed: {
        title: "ヘルプ - v1.5.0-a",
        description: "Prefixは`!.`です。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "**導入サーバー数**",
            value: `${client.guilds.cache.size}`,
            inline: true
          },
          {
            name: "**Ping**",
            value: `${client.ws.ping}`
          },
          {
            name: "**about**",
            value: "`help`,`info`,`status`"
          },
          {
            name: "**tool**",
            value: "`bans`,`permission`,\n`translate`"
          },
          {
            name: "**other**",
            value: "`~~~<MessageLink>~~~`停止中\n`developer`"
          },
          {
            name: "**サポートサーバー**",
            value: "https://discord.gg/57PStcaAAn"
          },
          {
            name: "**追加ヘルプ:**",
            value: "`!.h-translate`"
          },
          {
            name: "**お知らせ:**",
            value: "・引用機能`(v0.1)`はeveryone&hereの権限が悪用される可能性が出てきたので停止します。\nhttps://github.com/SpaceServerApp/SpaceServerApp-changelog/blob/main/1.5.x/v1.5.0-a.md"
          }
        ]
      }
    })
  }
  if(message.content === '!.h-translate') {
    message.channel.send({
      embed: {
        title: "翻訳 - help",
        timestamp: new Date(),
        fields: [
          {
            name: "Usage:",
            value: "`!translate <元の言語> <変換したい言語> <翻訳したい言語>`"
          },
          {
            name: "例:",
            value: "`!translate ja en こんにちは`"
          },
          {
            name: "ロール制限無し",
            value: "全員実行可能です。"
          }
        ]
      }
    })
  }
  if(message.content === '!.info') {
    message.channel.send({
      embed: {
        title: "詳細情報",
        description: "このBotの詳細情報です。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "**バージョン**",
            value: "Ver1.5.0-a\n(Build 1.5.X bug1)",
            inline: true
          },
          {
            name: "**最新のアップデート情報**",
            value: "https://github.com/SpaceServerApp/SpaceServerApp-changelog/blob/main/1.5.x/v1.5.0-a.md",
            inline: true
          },
          {
            name: "**サポートサーバー**",
            value: "https://discord.gg/57PStcaAAn"
          },
          {
            name: "**ヒント:**",
            value: "`!.info-project` でProjectメンバー\n`!.info-update`で簡易的なパッチノートを確認できます。"
          }
        ]
      }
    })
  }
  if(message.content === '!.status') {
    message.channel.send({
      embed: {
        title: "現在のサーバー情報",
        description: "現在の宇宙鯖関連のサーバーステータス",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "__New!SpaceServer__",
            value: "稼働中",
            inline: true
          },
          {
            name: "__宇宙鯖Discord__",
            value: "利用可能",
            inline: true
          },
          {
            name: "__あいあんBot__",
            value: "一部利用不可\n`MusicVerのみ`"
          }
        ]
      }
    })
  }
  if(message.content === '!.developer') {
    message.channel.send({
      embed: {
        title: "開発に参加しませんか？｜Join SpaceServerAppDeveloper",
        description: "開発の掟を確認しよう",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "今すぐ参加！",
            value: "https://discord.gg/57PStcaAAn"
          }
        ]
      }
    })
  }
  if(message.content === '!.oplist') {
    message.channel.send({
        embed: {
            title: "OPリスト",
            description: "宇宙鯖のOP(権限者)たちです。\n困ったら助けてくれます。たぶん。",
            color: 0x8261c9,
            timestamp: new Date(),
            fields: [
                {
                    name: "**オーナー:**",
                    value: "・ゆりしー(yurisi)"
                },
                {
                    name: "**スタッフ:**",
                    value: "・りりちゃん(liliyama0132)\n・じむ\n・かみなり\n・あくとう\n"
                },
                {
                    name: "**宇宙鯖サーバー開発者:**\n宇宙鯖のプラグイン開発者。",
                    value: "`該当者なし`"
                },
                {
                    name: "**テクスチャ開発者:**",
                    value: "・くらぅん"
                },
                {
                    name: "**建築士:**",
                    value: "・Spiny.java"
                },
                {
                    name: "**VIP:**",
                    value: "・あぱ\n・ねこ\n・ねむけ"
                },
                {
                    name: "**長官-警察上位:**",
                    value: "あかね,めやそん,らいだー,電気魚"
                },
                {
                    name: "**警察:**",
                    value: "らいでん,ふぃぐ,ららりんご,Fire,たらこ,カカオ豆,しょうゆ"
                },
                {
                    name: "**リストにいない人:**",
                    value: "僕が認知してる人だけです。いないときはPR(プルリクエスト)をお願い申し上げます。"
                }
            ]
        }
    })
  }
  if(message.content === '!.ねたばん') {
    message.channel.send({
        embed: {
            title: "ねたBAN 早見表",
            description: "2020/11/26現在",
            timestamp: new Date(),
            fields: [
                {
                    name: "**める**",
                    value: "BAN 3回\nKick 112回"
                },
                {
                    name: "**ゆりしー**",
                    value: "BAN 1回\nKick 15回"
                },
                {
                    name: "**あぱ**",
                    value: "BAN 0回\nKick 28回"
                },
                {
                    name: "**ねむけ**",
                    value: "BAN 1回\nKick 150回"
                },
            ]
        }
    })
  }
  if(message.content === '!.info-project') {
    message.channel.send({
      embed: {
        title: "Projectメンバー",
        description: "いつもAppの開発などありがとうございます。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "__**オーナー**__",
            value: "・Natu9`#2506`\nhttps://github.com/Natu9"
          },
          {
            name: "__**開発チーム**__",
            value: "・nyounyu`#8303`\nhttps://github.com/syoooooooooyu"
          },
        ]
      }
    })
  }
  if(message.content === '!.info-update') {
    message.channel.send({
      embed: {
        title: "アップデート情報",
        description: "Mainchange:\nhttps://github.com/SpaceServerApp/SpaceServerApp-changelog",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "__**Ver1.5.0-a\n(Build 1.5.X bug1)**__",
            value: "悪用される機能の停止。\nhttps://github.com/SpaceServerApp/SpaceServerApp-changelog/blob/main/1.5.x/v1.5.0-a.md"
          },
          {
            name: "__**Ver1.5.0\n(Build 1.5.X)**__",
            value: "・本番環境に\n・一部コマンドの廃止"
          }
        ]
      }
    })
  }
})

//それそれメンバーの参加退出イベント
client.on('guildMenberAdd', member => {
  client.channels.cache.get('639459581654859799').send(`> ${member.guild.name} に ${member.displayName} が参加しました`)
})

client.on('guildMemberRemove', member => {
  client.channels.cache.get('639459581654859799').send(`> ${member.guild.name} から ${member.displayName} が退出しました`)
})

//ここから名言
client.on('message', (message) => {
  if(message.content === 'ぱちんかす' && !message.author.bot) message.reply('> パチンコ進捗どうですか？\n> は？負けた？\n> 宇宙鯖のためにもっと回せ')
  if(message.content === '160gb' && !message.author.bot) message.reply('https://youtu.be/iBlMaO_QbJg\n\n')
  if(message.content === 'せやなどーなつ' && !message.author.bot) message.reply('> お酒は人の本性を暴く。覚えといて。')
  if(message.content === '魔法' && !message.author.bot) message.reply('> SLOT魔法少女まどか☆マギ2\nhttps://1geki.jp/slot/s_madomagi2/')
  //ここからBAN
  if(message.content === 'はいめるばん' && !message.author.bot) message.reply('> Haimeruban!\n> 現在、BAN**3回**・Kick**112回**(2020/11/23現在)')
  if(message.content === 'はいゆりしばん' && !message.author.bot) message.reply('> Haiyurisiban!\n> 現在、BAN**1回**・Kick**15回**・警告**27個**(2020/11/26現在)')
  if(message.content === 'はいあぱばん' && !message.author.bot) message.reply('> HaiApaban!\n> 現在、BAN**0回**・Kick**28回**(2020/11/26現在)')
  if(message.content === 'はいねむけばん' && !message.author.bot) message.reply('> Hainemukeban!\n> 現在、BAN**1回**・Kick**150回**(2020/11/26現在)')
})


client.on('message', async message => {
  if (message.content === '!.bans' && message.guild) {
    const bans = await message.guild.fetchBans()
    message.channel.send("__このサーバでBANされたアカウントを表示します。__")
    message.channel.send(bans.map(ban => ban.user.tag).join('\n') || 'none')
    message.channel.send("**このBANに関しての質問は当Bot開発者は受けれません。**")
  }
  //ここから翻訳
  const args = message.content.split(' ').slice(1)

   if (message.content.startsWith('!.translate ')) {
     const source = encodeURIComponent(args.shift())
     const target = encodeURIComponent(args.shift())
     const text = encodeURIComponent(args.join(' '))

     const content = await fetch(`https://script.google.com/macros/s/AKfycbweJFfBqKUs5gGNnkV2xwTZtZPptI6ebEhcCU2_JvOmHwM2TCk/exec?text=${text}&source=${source}&target=${target}`).then(res => res.text())
     message.channel.send(content)
   }
})
