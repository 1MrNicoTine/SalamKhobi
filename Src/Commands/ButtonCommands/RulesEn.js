const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name : 'rulesen',
    run : async(client, interaction, container) => {

      const rulesen = new MessageEmbed()
	.setColor('000000')
	.setTitle('Rules')
.setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ RULES', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('1: Insulting peoples ethnicity, orientation, beliefs, etc is prohibited.\n2: Any obscenity and insult to the manager and interference in his work is strictly prohibited and the relevant person will be dealt with.\n3: Streaming content above 18, audio pad, recording, microphone boost, etc with the intention of exposing and disrupting the channel space is prohibited and will lead to rejection from the server.\n4: Any sexual jokes, teasing others, etc are prohibited.\n\n> We hope that by following the rules of the server, you will have a good time and a peaceful atmosphere for yourself and the people of the server.')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062670564398997534/8D3287E1-709D-4879-A064-290875F56FC8.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
      
        interaction.reply({embeds: [rulesen], ephemeral: true });
    }
}