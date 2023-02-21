require('util').promisify(setTimeout);
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: "shahrt",
    run: async(client, interaction, container) => {
       const embed = new MessageEmbed()
	.setColor('B22222')
	.setTitle('MAFIA TAKAVAR')
	.setURL('https://discord.gg/liquid')
 .setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
	.setAuthor({ name: 'LIQUID SCENARIO', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054460602468286534/Golden.png', url: '' })
	.setDescription('Select Shahr Rules In Menu \n────────────────────\nنقش شهروند را از لیست انتخاب کنید')
//.setImage('')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('shahrtm')
      .setPlaceholder('Select Shahr Rules')
      .addOptions([
        {
          label: 'دکتر',
          description: "DOCTOR",
          value: 'doctor',
          emoji : '💊'
        },
       {
          label: 'کارآگاه',
          description: "KARAGAH",
          value: 'karagah',
          emoji : '🗒️'
       },
       {
          label: 'تکاور',
          description: "TAKAVAR",
          value: 'takavarr',
          emoji : '☄️'
       },
       {
          label: 'تفنگ دار',
          description: "TOFANG DAR",
          value: 'tofangdar',
          emoji : '🔫'
       },
       {
          label: 'نگهبان',
          description: "NEGAHBAN",
          value: 'negahban',
          emoji : '💂'
       },
       {
          label: 'شهروند عادی',
          description: "SHAHR ADI",
          value: 'shahradi',
          emoji : '🕴️'
       }

        ]),
      )
 interaction.reply({ embeds: [embed], components: [row] , ephemeral: true });
}
}