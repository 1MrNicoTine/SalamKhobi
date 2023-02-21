require('util').promisify(setTimeout);
module.exports = {
    name: "male",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has("1062473973289472120")) {
      await member.roles.add('1062473973289472120')
      return interaction.reply({ content: 'Role <@&1062473973289472120> Set Shod', ephemeral: true });
    } else if(member.roles.cache.has("1062473973289472120")) {
      await member.roles.remove('1062473973289472120')
      return interaction.reply({ content: 'Role <@&1062473973289472120> Remove Shod', ephemeral: true });
}
    }
}


  