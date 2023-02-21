const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'verifyc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
       // const row = new container.Discord.MessageActionRow()
      //  .addComponents(
      //      new container.Discord.MessageButton()
   // .setCustomId('mafia')
   // .setLabel('Mafia Role')
   // .setStyle('DANGER')
   // .setEmoji('1011024869590315009')
//);
          
      const emafia = new MessageEmbed()
	.setColor('B22222')
	.setTitle('How To Verify')
	.setURL('https://discord.gg/liquid')
 .setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
	.setAuthor({ name: 'LIQUID ROLE', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054460602468286534/Golden.png', url: '' })
	.setImage('https://cdn.discordapp.com/attachments/975599013309079562/1054433218906034267/2022_12_19_19_43_02_export.gif')
	.setDescription('Welcome to Liquid server!\nWe wish you good moments on the server.\n**To get the membership roll, enter !new**\n───────────────\nبه سرور Liquid خوش آمدید!\nلحظات خوبی را در سرور برای شما آرزومندیم.\n**برای دریافت رول ممبری new! را وارد کنید.**')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [emafia],})
  }
    }
    
