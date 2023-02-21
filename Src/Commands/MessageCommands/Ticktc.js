const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'tc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('ticket')
    .setLabel('| Tickt Create')
    .setStyle('SUCCESS')
    .setEmoji('1061926080316973097'),

    new container.Discord.MessageButton()
    .setCustomId('ticketr')
    .setLabel('| Tickt Rules')
    .setStyle('SECONDARY')
    .setEmoji('1062475450535903364')

    
);
          
      const etickt = new MessageEmbed()
	.setColor('000000')
	.setTitle('Tickt Create')
 .setThumbnail('https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKT', iconURL: 'https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png', url: '' })
	.setDescription('\n\n> **Click to <:clip:1061926080316973097>  create a ticket**  \n \n> **برای ساخت تیکت دکمه <:clip:1061926080316973097>  را بزنید  **\n' )
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062490116569964554/55D26086-EE32-4F62-959A-606C6DCBE9B3.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png' });
      
      message.channel.send({embeds: [etickt], components: [row]})
  }
    }
    
