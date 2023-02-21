require('util').promisify(setTimeout);
module.exports = {
    name: "Searching For Rell",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has("1054249739266302064")) {
      await member.roles.add('1054249739266302064')
      return interaction.reply({ content: '<@&1054249739266302064> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249739266302064")) {
      await member.roles.remove('1054249739266302064')
      return interaction.reply({ content: '<@&1054249739266302064> Remove', ephemeral: true });
}
    }
}



  