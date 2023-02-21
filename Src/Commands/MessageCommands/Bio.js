const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'bo',
  ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('Man')
    .setLabel('| Male')
    .setStyle('SECONDARY')
    .setEmoji('1061926030308282368'),
          new container.Discord.MessageButton()
    .setCustomId('woman')
    .setLabel('| Woman')
    .setStyle('SECONDARY')
    .setEmoji('1061926038264881182')
);


          
      const erules = new MessageEmbed()
	.setColor('000000')
	.setTitle('GENDER ROLE')
 .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
 .setAuthor({ name: 'ƬПЯ ROLE', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
 .setDescription('\nClick Button For Add/Remove Role <@&1062473973289472120> & <@&1062473973289472120>\n\n')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062385231014936586/192A82E6-4490-431E-885F-A7929944862B.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
      message.channel.send({embeds: [erules], components: [row]})
  }
    }
    
