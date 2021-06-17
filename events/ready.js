const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

module.exports = async client => {
	
	
  log(`BOT: Aktif, Komutlar yüklendi!`);
  log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  
  client.user.setStatus("online");

  client.user.setActivity(`NacssHost Discord Bot Hosting`);
  
  log(`BOT: Oyun ismi ayarlandı!`);
  log(`BOT: Şu an ${client.channels.cache.size.toLocaleString()} adet kanala, ${client.guilds.cache.size.toLocaleString()} adet sunucuya ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet veriliyor!`);

};