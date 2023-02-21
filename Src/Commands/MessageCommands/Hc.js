const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'hc',
  description: "get hidden roles",
  ownerOnly: true,
  run: async(client, message, args, prefix) => {
    //if(!message.content.startsWith(prefix)) return;
    const embed = new MessageEmbed()
	.setColor('B22222')
	.setTitle('Hidden Selection')
	.setURL('https://discord.gg/liquid')
 .setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
	.setAuthor({ name: 'LIQUID ROLE', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif', url: '' })
	.setDescription('Select Hide Section In Menu \n────────────────────\n سکشن که دوست ندارید را از منو انتخاب کنید')
	.addFields(
    		{ name: '**Hidden List**', value: '<:hidden:1058663652032512061>  <@&1054249728163987567> \n <:hidden:1058663652032512061>  <@&1054249729158021190>\n <:hidden:1058663652032512061>  <@&1054249730210791474>\n<:hidden:1058663652032512061>  <@&1054249731292930068>\n<:hidden:1058663652032512061>  <@&1054249734228951131>'})
.setImage('https://media.discordapp.net/attachments/1003601026458320920/1011596408794652774/JJy7HNqNp3mS.gif')
	.setFooter({ text: '-</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('hiddenrole')
      .setPlaceholder('Select Hidden Role To Add/Remove')
          //.setMinValues(1)
					//.setMaxValues(7)

      .addOptions([
        {
          label: '々 | Hidden Event',
          description: "Click To Add/Remove Hidden Event",
          value: 'event',
          emoji : ' <:hidden:1058663652032512061> '
        },
        {
          label: '々 | Hidden Public ',
          description: "Click To Add/Remove Hidden Public",
          value: 'Public',
          emoji : ' <:hidden:1058663652032512061> '
        },
        {
          label: '々 | Hidden Mafia',
          description: "Click To Add/Remove Hidden Mafia",
          value: 'mafia',
          emoji : ' <:hidden:1058663652032512061> '
        },
        {
          label: '々 | Hidden Game',
          description: "Click To Add/Remove Hidden Game",
          value: 'game',
          emoji : ' <:hidden:1058663652032512061> '
        },,
        {
          label: '々 | Hidden Private',
          description: "Click To Add/Remove Hidden Private",
          value: 'music',
          emoji : ' <:hidden:1058663652032512061> '
        }
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row]});
  }
}

