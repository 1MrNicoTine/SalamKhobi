const Discord = require("discord.js");
module.exports = (client, member) => {
let channel = member.guild.channels.cache;

  let embed = new Discord.MessageEmbed()
    .setThumbnail(
      "https://your-image-url" // make sure to change this to your image
    )
    .addField(
      `:point_right: Welcome!`,
      `Hello, welcome to ${member.guild.name} <@${member.user.id}>!`,
      true
    )
    .addField(
      `:zap: Guild Statistics`,
      `Server member count: ${member.guild.memberCount}`,
      true
    )
    .setColor("YELLOW")
    .setImage(
      "https://your-image-url" // make sure to change this to your image
    );

  channel
    .find((channel) => channel.id === process.env.CHANNEL_ID)
    .send({ embeds: [embed] });
};