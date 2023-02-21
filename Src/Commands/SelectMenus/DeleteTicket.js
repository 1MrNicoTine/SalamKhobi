const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name : 'delete',
    run : async(client, interaction, container) => {

const tchannel = interaction.channel
                tchannel.delete();
    }
}