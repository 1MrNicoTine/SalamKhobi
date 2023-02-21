require('util').promisify(setTimeout);
module.exports = {
    name: "InRell",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has("1054249740780453888")) {
      await member.roles.add('1054249740780453888')
      return interaction.reply({ content: '<@&1054249740780453888> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249740780453888")) {
      await member.roles.remove('1054249740780453888')
      return interaction.reply({ content: '<@&1054249740780453888> Remove', ephemeral: true });
}
    }
}



  