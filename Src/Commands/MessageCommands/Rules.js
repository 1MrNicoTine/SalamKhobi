const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'rulesc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('rulesir')
    .setLabel('قوانین')
    .setStyle('SECONDARY')
    .setEmoji('1012036100094693509'),
          new container.Discord.MessageButton()
    .setCustomId('rulesen')
    .setLabel('Rules')
    .setStyle('SECONDARY')
    .setEmoji('1012036287676567614')
);


          
      const erules = new MessageEmbed()
	.setColor('000000')
	.setTitle('Rules | قوانین')
 .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ RULES', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('As you can see, there are rules on every server, and I request you to read these rules and follow all the rules to have a friendly atmosphere on the LIQUID server.\nPress button <:rulesen:1012036287676567614> to see the rules.\n────────────────────\nهمانطور که شاهد هستید در هر سرور قوانینی وجود دارد که از شما عزیزان خواهشمند هستیم با مطالعه این قوانین و رعایت کردن همه موارد، جوی کاملا دوستانه  رادر سرور لیکوید داشته باشیم.\nبرای دیدن قوانین دکمه <:rulesir:1012036100094693509> رو بزنید.')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062669588095053904/AB88227C-5CD3-4323-80EA-68AC57296BD2.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
      message.channel.send({embeds: [erules], components: [row]})
  }
    }
    
