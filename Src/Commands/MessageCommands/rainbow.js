const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'rgb',
  ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('rainbow')
    .setLabel('Rainbow Role')
    .setStyle('SECONDARY')
    .setEmoji('🌈')
);
          
      const emafia = new MessageEmbed()
	.setColor('000000')
	.setTitle('RGB Role')
 .setThumbnail('https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ ROLE', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('> Click 🌈  Button For Add/Remove Role <@&1062874991516987412> \n\n')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062872815180714074/3F0FFBC3-43F0-4492-B665-98333CC93340.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
      message.channel.send({embeds: [emafia], components: [row]})
  }
    }
    
