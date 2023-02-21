require('util').promisify(setTimeout);
module.exports = {
    name: "Married",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has("1054249741912920124")) {
      await member.roles.add('1054249741912920124')
      return interaction.reply({ content: '<@&1054249741912920124> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249741912920124")) {
      await member.roles.remove('1054249741912920124')
      return interaction.reply({ content: '<@&1054249741912920124> Remove', ephemeral: true });
}
    }
}



  