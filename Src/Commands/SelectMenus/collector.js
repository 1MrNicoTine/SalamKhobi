const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name : 'collector',
    run : async(client, interaction, container) => {

      const duty = new MessageEmbed()
	.setColor('B22222')
	.setTitle('Collector Duty')
	.setURL('https://discord.gg/liquid')
.setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
	.setAuthor({ name: 'LIQUID DUTY', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054460602468286534/Golden.png', url: '' })
	.setDescription(' > این رول برای کولیدرها ساخته شده (لیدر دوم بکس)\nیا افرادی که یک فمیلی را به سرور دعوت میکنند.\nوظیفه این رول نظارت بر افراد فمیلی خود میباشد که رول دریافت کرده اند.\nاجازه دخالت مستقیم بر ادمین هارا ندارد.')
	.setImage('https://cdn.discordapp.com/attachments/975599013309079562/1054633933523918898/20221220_090428.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
        interaction.reply({embeds: [duty], ephemeral: true });
    }
}