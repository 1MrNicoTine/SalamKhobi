require('util').promisify(setTimeout);
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: "ticket",
    run: async(client, interaction, container) => {
       const embed = new MessageEmbed()
	.setColor('B22222')
	.setTitle('Ticket Selection')
 .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'LIQUID TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1061608015024898059/1061724177259839580/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png', url: '' })
	.setDescription('Select Ticket Type In Menu \n────────────────────\nنوع تیکت را از لیست انتخاب کنید')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062490116569964554/55D26086-EE32-4F62-959A-606C6DCBE9B3.jpg')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('tickett')
      .setPlaceholder('Select Ticket Type')
      .addOptions([
        {
          label: 'General | سوال عمومی',
          description: "Ticket For Public Question ",
          value: 'general',
          emoji : '1062520877410963566'
        },
        {
          label: 'report | شکایت ',
          description: "Ticket For Moderator",
          value: 'handling',
          emoji : '1062520882054045717'
        },
        {
          label: 'Developer | دولوپر',
          description: "Ticket For Developer",
          value: 'developer',
          emoji : '1062520889318592644'
        },
        {
          label: 'Designer | دیزاینر',
          description: "Ticket For Developer",
          value: 'designer',
          emoji : '1062520886298685470'
        },
        {
          label: 'Configer | کانفیگر',
          description: "Ticket For Configer",
          value: 'configer',
          emoji : '1062648455085965322'
        }

        //{
        // label: 'Request Admin | درخواست ادمین',
        //  description: "To request admin",
        //  value: 'radmin',
        //  emoji : '1054649129466339348'
      //  }
        ]),
      )
 interaction.reply({ embeds: [embed], components: [row] , ephemeral: true });
}
}