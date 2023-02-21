const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'bo2',
  ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
          new container.Discord.MessageButton()
    .setCustomId('Single')
    .setLabel('Single')
    .setStyle('SECONDARY')
    .setEmoji('1058891850884325496'),
          new container.Discord.MessageButton()
    .setCustomId('Searching For Rell')
    .setLabel('Searching For Rell')
    .setStyle('SECONDARY')
    .setEmoji('1058891775453958205'),
          new container.Discord.MessageButton()
    .setCustomId('InRell')
    .setLabel('In Rell')
    .setStyle('SECONDARY')
    .setEmoji('1058891695476973568'),
         new container.Discord.MessageButton()
    .setCustomId('Married')
    .setLabel('Married')
    .setStyle('SECONDARY')
    .setEmoji('1058891506863325404')
);


          
      const erules = new MessageEmbed()
	.setColor('B22222')
	.setTitle('LIQUID ROLE')
	.setURL('https://discord.gg/liquid')
 .setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
 .setAuthor({ name: 'LIQUID ROLE', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif', url: '' })
 .setDescription('Click <:genders:1058714854682271755> Button For Add/Remove Role <@&1054249737521463306> & <@&1054249736321900664>\n────────────────────\n با کلیک کردن روی دکمه های زیر رول جنسیت خود را انتخواب و یا حذف کنید')
	.setImage('https://cdn.discordapp.com/attachments/1058677397714636843/1058807343128784906/6af96f2c2848efab877994ec698209c2.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [erules], components: [row]})
  }
    }
    
