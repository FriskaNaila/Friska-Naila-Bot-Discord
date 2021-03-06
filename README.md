# Friska Naila Discord Bot
Friska Naila Discord bot is an epic multi-purpose bot, which is very powerful and contains rich functions below.\
Please invite me [here](https://discord.com/oauth2/authorize?client_id=779628592052305942&permissions=8&scope=bot)!

## Our Bot Features:
Friska Naila Discord Bot offers:
* :battery: 24/7 Full Uptime with high stability
* :smiley: Easy to use
* ⚙ Per-Server Settings
* :+1: Fast command responses
* :cop: Powerful Moderation Commands
* :tada: Giveaways Commands
* :file_folder: Persistent Database based in `Enmap`
* :rocket: Support for different languages(Coming Soon)

##### ⚠Admin Permission needed for Moderation commands
##### ⚠Embed links needed for bot embed messages

## Featured Commands:
We have more than 80 commands in this bot, and they are **featured** and having 8 main categories
* ⚙ **Customization Functions:** `setprefix` and more **coming soon**!
* :gift: **Giveaways:** `gstart`, `gend`, `greroll`
* :file_folder: **Info:** `help`, `uptime`, `vote`, `channel`, `stats`, `whois`, and **5 more!**
* :stars: **Images:** `cat`, `changemymind`, `gay`, `trigger`, `circle`, and **7 more!**
* :soccer: **Fun:** `8ball`, `reverse`, `snipe`, and **4 more!**
* :musical_note: **Music:** `play`, `loop`, `skip`, `stop`, `jumpto`, `volume`, and **4 more!**
* :lock: **Moderation:** `ban`, `kick`, `warn`, `mute`, `createchannel`, `createemoji`, and **9 more!**
* :electric_plug: **Utility:** `weather`, `aes256`, `embed`, `enlarge`, and **4 more!**

## Self-Hosting & Development
Requirement:
- Node.js v12.x or upper
- Python (For Advanced Music feature)

Reminders:
- If you are not using Discord Bot lists and top.gg, delete files from `handlers/dbl-loader.js` / `events/dbl/all-files` and removes all codes from index.js with `//`
- If you are using Top.gg bot lists API, u need to delete `//` from commands lines from index.js
- If you are not using .env supported hosters, please add code `require('dotenv').config()` to the top of the code from `index.js`, `shard.js` and other place are needed to use `process.env.(stuff)`

1. To get Draconian ready to run locally, the first step is to clone this repository onto the machine you wish to run it on.
2. **Node.js version 12 or newer is recommended to run Draconian since we are using Discord.js v12**
3. Use NPM to install the dependencies from the project folder: `npm install`
4. Edit/create the file `.env` (or your hoster's provided environment secret) and insert your bot token in `TOKEN` value.
5. Start the bot from the project folder: `node shard.js`
6. Open `http://localhost:8080/` or your project URL to view the http output.
