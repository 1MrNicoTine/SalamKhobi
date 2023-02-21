require('util').promisify(setTimeout);
module.exports = {
    name: "banserver",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
            if (!interaction.isButton()) return;
  
      if (interaction.customId == "banserver") {
          if (interaction.member.roles.cache.find(r => r.id === '1059418501921648694')) {
            interaction.reply({ content: `User tavasot <@${interaction.member.id}> BanServer !` })
      } else {
            interaction.reply({ content: `Shoma Permission Braye BanServer Krdn Ra Ndarid`, ephemeral: true });

      }
      }
      }
}