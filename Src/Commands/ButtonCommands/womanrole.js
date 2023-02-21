require('util').promisify(setTimeout);
module.exports = {
    name: "woman",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has("1054249737521463306")) {
      await member.roles.add('1054249737521463306')
      return interaction.reply({ content: '<@&1054249737521463306> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249737521463306")) {
      await member.roles.remove('1054249737521463306')
      return interaction.reply({ content: '<@&1054249737521463306> Remove', ephemeral: true });
}
    }
}



  