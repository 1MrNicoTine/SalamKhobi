const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name : 'ticketr',
    run : async(client, interaction, container) => {

      const rulesticket = new MessageEmbed()
	.setColor('000000')
	.setTitle('قوانین تیکت')
.setThumbnail('https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('** > لطفا داخل تیکت ادمین ها را تگ نکنید صبور باشید .\n\n> لطفا در انتخواب دلیل تیکت خود دقت نمایید.\n\n> هرگونه فحش و شوخی داخل تیکت باعت بن شدن شما از چنل تیکت میشود. \n\n> امیدوارم قوانین را با دقت بخونید تا به مشکل نخورید و لحظات خوبی رو درکنار ما داشته باشید.**')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062670302317916180/tr.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
        interaction.reply({embeds: [rulesticket], ephemeral: true });
    }
}