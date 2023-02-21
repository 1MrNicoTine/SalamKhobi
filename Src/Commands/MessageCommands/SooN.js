const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'soon',
    run: async (client, message, args, container) => {


    if(message.channel.id == '1077353148173262989') {
        message.react('1076475973442224129')}

      const iembed = new MessageEmbed()
	.setColor('ad8905')
	.setTitle('Vrtx Family')
 .setThumbnail('https://media.discordapp.net/attachments/1059199882784690205/1076264011374530690/IMG_3360.png?width=430&height=453')
	.setAuthor({ name: 'Vrtx | News', iconURL: 'https://media.discordapp.net/attachments/1059199882784690205/1076513164839108749/75082C2B-E055-4A7A-8DC3-B79AB2231725.png?width=453&height=453', url: '' })
	.setDescription(`Ba Salam Khedmt Dostan Aziz Server Vrtx Family UpDate Shod \n V Designe Server jadid Shod  Omidvarm Lahazat Khobi Ro Pish Ham Dashte Bashim \n\n ||@everyone||`)
	.setFooter({ text: '| Nicotine', iconURL: 'https://media.discordapp.net/attachments/1059199882784690205/1076298797283545119/DA723674-AA9E-4C9F-8B43-7A3153B4987D.jpg?width=453&height=453' });
      

    message.reply({ embeds: [iembed] });
  }
}




  