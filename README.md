# CosumoSystem

# Overview
宇宙鯖Discordに導入された唯一の民営DiscordBotとして宇宙鯖民に役立つコンテンツを提供し続ける。

# Function
- 語録などの楽しい機能
- 宇宙鯖権限者（基本的に運営スタッフのみ。）の管理に役立つ機能
- イベントに利用できそうな機能


## Development environment
- Visual Studio CodeやIntelliJ IDEAなどの総合開発環境
- discord.js v12.5.1
- node.js v14.15.1
- Discord Account
- Discord Developer Portalの知識

## Prerequisite authority
基本的にこのBotは宇宙鯖の制約により、  
メッセージの送受信などの権限以外は利用しません。

## Coating rules
特にありません。  
ただし、CommitChangesのときは*AddやUpdate*などの変更についての英単語をつけることをおすすめします。  
することでDiscordにあるWebhookの通知で利用者がどのような変更がなされたのかわかりやすくなります。  
（例: 機能の追加に伴うコミット→`Add：めるのBAN機能を追加`・コードの改善に伴うコミット→`Update：めるのBAN機能の改善`）

## How to use the terminal
### Start CosumoSystem
```bash
- npm run start  
- node main.js
```

### Problem verification
With ESLint
静的検証ツール(ESLint)を使って問題を調べる。
```bash
npm run lint
```

### Problem fix With lint:fix
問題を修正する。
```bash
npm run lint:fix
``
