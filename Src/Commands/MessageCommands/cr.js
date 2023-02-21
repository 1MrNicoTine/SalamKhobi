const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'c',
  description: "get color roles",
  ownerOnly: true,
  run: async(client, message, args, prefix) => {
    //if(!message.content.startsWith(prefix)) return;
    const embed = new MessageEmbed()
	.setColor('ad8905')
	.setTitle('Color Selection')
 .setThumbnail('https://cdn.discordapp.com/attachments/1059199882784690205/1076513164839108749/75082C2B-E055-4A7A-8DC3-B79AB2231725.png')
	.setAuthor({ name: 'Vrtx RoLe', iconURL: 'https://cdn.discordapp.com/attachments/1059199882784690205/1076513164839108749/75082C2B-E055-4A7A-8DC3-B79AB2231725.png', })
	.setDescription('> Select Favorite Color In Menu\n\n')
	.addFields(
    		{ name: '**Color 1**', value: '<:Black:1076270711905198151> • <@&1077353121472327752> \n<:Gray:1076282034751803482> • <@&1077353120184684675> \n<:DarkBlue:1076273117225308300> • <@&1077353122457985174> \n<:Blue:1076274330029281382> • <@&1077353123598831667> \n<:Sky:1076273063739543622> • <@&1077353124597092423> \n<:DarkGreen:1076274776357736518> • <@&1077353125683400724> \n<:Green:1076276135370956891> • <@&1077353126547435532> \n<:PaleGreen:1076276343865626624> • <@&1077353127616983131> \n<:Lemon:1076276875552362508> • <@&1077353129789636718> \n<:Golden:1076276671134572645> • <@&1077353128866885773>'},
		{ name: '**Color 2**', value: '<:Orange:1076277215169359943> • <@&1077353130578170058> \n<:Red:1076277493285273810> • <@&1077353132390097007> \n<:Pink:1076285269629730888> • <@&1077353133002457249> \n<:PalePink:1076283268271444008> • <@&1077353135414181930> \n<:PalePurple:1076284578915946626> • <@&1077353136609558558> \n<:Purple:1076286490268676196> • <@&1077353138601865226> \n<:BoldPurple:1076286081961570356> • <@&1077353137578459166>'})
	.setImage('https://media.discordapp.net/attachments/1059199882784690205/1076512266310131723/B1F1E5C1-447D-4B81-9591-1833458C4929.jpg?width=748&height=420')///banner_embed
	.setFooter({ text: ' | Nicotine', iconURL: 'https://cdn.discordapp.com/attachments/1059199882784690205/1076298797283545119/DA723674-AA9E-4C9F-8B43-7A3153B4987D.jpg' });

    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('colorrole')
      .setPlaceholder('Select Color To Add/Remove')
      .addOptions([
        {
          label: 'Ꮙ | Black',
          description: "Click To Add/Remove Black color",
          value: 'black',
          emoji : '<:Black:1076270711905198151>'
        },
        {
          label: 'Ꮙ | Gray',
          description: "Click To Add/Remove Gray color",
          value: 'gray',
          emoji : '<:Gray:1076282034751803482>'
        },
        {
          label: 'Ꮙ | Dark Blue',
          description: "Click To Add/Remove Dark Blue color",
          value: 'darkblue',
          emoji : '<:DarkBlue:1076273117225308300>'
        },
        {
          label: 'Ꮙ | Blue',
          description: "Click To Add/Remove Blue color",
          value: 'blue',
          emoji : '<:Blue:1076274330029281382>'
        },
        {
          label: 'Ꮙ | Sky',
          description: "Click To Add/Remove Sky color",
          value: 'sky',
          emoji : '<:Sky:1076273063739543622>'
        },
        {
          label: 'Ꮙ | Dark Green',
          description: "Click To Add/Remove Dark Green color",
          value: 'darkgreen',
          emoji : '<:DarkGreen:1076274776357736518>'
        },,
        {
          label: 'Ꮙ | Green',
          description: "Click To Add/Remove Green color",
          value: 'green',
          emoji : '<:Green:1076276135370956891>'
        },
        {
          label: 'Ꮙ | Pale Green',
          description: "Click To Add/Remove Pale Green color",
          value: 'palegreen',
          emoji : '<:PaleGreen:1076276343865626624>'
        },
        {
          label: 'Ꮙ | Lemon',
          description: "Click To Add/Remove Lemon color",
          value: 'lemon',
          emoji : '<:Lemon:1076276875552362508>'
        },
        {
          label: 'Ꮙ | Golden',
          description: "Click To Add/Remove Golden color",
          value: 'golden',
          emoji : '<:Golden:1076276671134572645>'
        },
        {
          label: 'Ꮙ | Orange',
          description: "Click To Add/Remove Orange color",
          value: 'orange',
          emoji : '<:Orange:1076277215169359943>'
        },
        {
          label: 'Ꮙ | Red',
          description: "Click To Add/Remove Red color",
          value: 'red',
          emoji : '<:Red:1076277493285273810>'
        },
        {
          label: 'Ꮙ | Pink',
          description: "Click To Add/Remove Pink color",
          value: 'pink',
          emoji : '<:Pink:1076285269629730888>'
        },
        {
          label: 'Ꮙ | Pale Pink',
          description: "Click To Add/Remove Pale Pink color",
          value: 'palepink',
          emoji : '<:PalePink:1076283268271444008>'
        },
        {
          label: 'Ꮙ | Pale Purple',
          description: "Click To Add/Remove Pale Purple color",
          value: 'palepurple',
          emoji : '<:PalePurple:1076284578915946626>'
        },
        {
          label: 'Ꮙ | Purple',
          description: "Click To Add/Remove Purple color",
          value: 'purple',
          emoji : '<:Purple:1076286490268676196>'
        },
        {
          label: 'Ꮙ | Bold Purple',
          description: "Click To Add/Remove Bold Purple color",
          value: 'boldpurple',
          emoji : '<:BoldPurple:1076286081961570356>'
        }
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row]});
  }
}

