const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

client.on ('message', message => {
if (message.content === prefix + "emojiler") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
  message.channel.send(emojiList);
}
})
let prefix = "!!"