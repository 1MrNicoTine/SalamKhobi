require('util').promisify(setTimeout);
module.exports = {
    name: "reject",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
            if (!interaction.isButton()) return;
  
      if (interaction.customId == "reject") {
          if (interaction.member.roles.cache.find(r => r.id === '1059199881958396091')) {
            interaction.reply({ content: `✅ Reject Bug By <@${interaction.member.id}> !` })
      } else {
            interaction.reply({ content: `You Dont Have Permission`, ephemeral: true });

      }
      }
      }
}