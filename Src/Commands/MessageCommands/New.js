const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'new',
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
    .setCustomId('voiceverify')
    .setLabel('Verify Voice')
    .setStyle('SUCCESS')
    .setEmoji('1010620494367686706')
);
          
      const enew = new MessageEmbed()
        .setColor('RANDOM')
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
          .setImage('https://cdn.discordapp.com/attachments/975599013309079562/1054433218906034267/2022_12_19_19_43_02_export.gif')
      .setAuthor({ name: 'Welcome To Liquid', iconURL: `${message.guild.iconURL()}`})
        .setDescription('👋**سلام دوست عزیز\n\n💧به سرور لیکوید خوش اومدید\nلطفا برای وریفای در ویس منتظر بمونید تا ادمین ها در اولین فرصت شمارو وریفای میکنند**')
        .setTimestamp()
        .setFooter({text: `Request By ${message.member.displayName} `})


const anew = new MessageEmbed()
       .setDescription(`  **${message.member.user}** برای وری فای در چنل ویتینگ امده لطفا چک کنید`)
       .setColor('#2f3136');
      
      const admin = client.channels.cache.get('1023222892583993395')
const verify = client.channels.cache.get('1023222892583993395')
      admin.send({content:`<@&1054249742856626209>` ,embeds: [anew], components: [row]})
      verify.send({content:`${message.member.user}` ,embeds: [enew], components: [row]}) .then(msg => {
    message.delete()
    setTimeout(() => msg.delete(), 50000)
  })
    }
}
    
