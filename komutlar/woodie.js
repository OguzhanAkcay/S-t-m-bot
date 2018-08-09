const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Harry Potter**")
        .setImage("https://tr.pinterest.com/pin/181199584986036149/")
        .setThumbnail("https://tr.pinterest.com/pin/181199584986036149/")
        .setColor(0x00AE86)
        .addField("Lakabı", "Büyücü", true)
        .addField("Yetenekleri", `
        *Çatal Dil
   * (Werebeaver)
   `, true)
   .addField("Motto", `That's nice tree, eh? (güzel ağaç, ha?)`, true)
   .addField("Hakkında", "Harry Potter ve Felsefe Taşı, J.K. Rowling'in aynı isimli kitabından sinemaya uyarlanmış 2001 yapımı fantastik film. Harry Potter serisinin ilk filmidir.")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'harry potter', 
  description: 'Harry Pottter Hakkında Bilgi Verir',
  usage: 'potter'
};
