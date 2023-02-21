const {
    MessageActionRow,
    MessageButton,
    MessageEmbed,
  } = require('discord.js');
  const discordModals = require('discord-modals');
  const { Modal, TextInputComponent, showModal } = discordModals;
module.exports = {
    name: 'bugc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
      
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('bugmodal')
    .setLabel('Bug Report')
    .setStyle('DANGER')
    .setEmoji('<:bugr:1061926011706560583> ')
);
          
      const ebug = new MessageEmbed()
	.setColor('B22222')
	.setTitle('Bug Report')
 .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ DEV', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('> Click The <:bugr:1061926011706560583> Button To Report A Bug \n')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1063971481689792532/9A375D22-BD77-455E-BF3A-7ADDDBF4CDAC.jpg')
	.setFooter({ text: '| ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
      message.channel.send({embeds: [ebug], components: [row]})
  }
    }
    
