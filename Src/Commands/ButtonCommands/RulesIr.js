const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name : 'rulesir',
    run : async(client, interaction, container) => {

      const rulesir = new MessageEmbed()
	.setColor('000000')
	.setTitle('قوانین')
.setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ RULES', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('1: توهین به قومیت، گرایش، اعتقادات و ... افراد ممنوع میباشد.\n2: هرگونه فحاشی و توهین به ادمین و دخالت در کار او اکیدا ممنوع است و با شخص مربوطه برخورد خواهد شد.\n3: استریم کردن محتوای +18، ساند پد، ریکورد، بوست مایک و ... به قصد افشا و بهم ریختن جَو چنل ممنوع میباشد و ریجیکت شدن از سرور را به همراه دارد.\n4: هرگونه شوخی جنسی، سیخ زدن و ... ممنوع میباشد.\n\n> امیدواریم با رعایت کردن قوانین سرور لحظات خوب و جوی آرام را برای خود و افراد سرور رقم بزنید.')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062670564193468456/8BBBD906-5D46-49EF-856E-C0F9E86E90D0.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
        interaction.reply({embeds: [rulesir], ephemeral: true });
    }
}