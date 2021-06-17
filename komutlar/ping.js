const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const pingembed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(`${client.user.username} - Gecikme Süresi`, client.user.avatarURL())
    .setDescription(`Gecikme süresi ölçülüyor...`)

  const m = await message.channel.send(pingembed);

  const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(`${client.user.username} - Gecikme Süresi`, client.user.avatarURL())
    .addField(`Mesaj Gecikme Süresi`, `${m.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField(`Bot Gecikme Süresi`, `${Math.round(client.ws.ping)}ms`, true)
  m.edit({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
