
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: "hiddenrole",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
//Hidden Event
  if(interaction.values == 'event')
  {
    if(!member.roles.cache.has("1054249728163987567")) {
      await member.roles.add('1054249728163987567')
      return interaction.reply({ content: '<@&1054249728163987567> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249728163987567")) {
      await member.roles.remove('1054249728163987567')
      return interaction.reply({ content: '<@&1054249728163987567> Remove', ephemeral: true });
    }
  }
  //Hidden Public
  if(interaction.values == 'public')
  {
    if(!member.roles.cache.has("1054249729158021190")) {
      await member.roles.add('1054249729158021190')
      return interaction.reply({ content: '<@&1054249729158021190> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249729158021190")) {
      await member.roles.remove('1054249729158021190')
      return interaction.reply({ content: '<@&1054249729158021190> Remove', ephemeral: true });
    }
  }
  //Hidden Mafia
  if(interaction.values == 'mafia')
  {
    if(!member.roles.cache.has("1054249731292930068")) {
      await member.roles.add('1054249731292930068')
      return interaction.reply({ content: '<@&1054249731292930068> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249731292930068")) {
      await member.roles.remove('1054249731292930068')
      return interaction.reply({ content: '<@&1054249731292930068> Remove', ephemeral: true });
    }
  }
  //Hidden Game
  if(interaction.values == 'game')
  {
    if(!member.roles.cache.has("1054249730210791474")) {
      await member.roles.add('1054249730210791474')
      return interaction.reply({ content: '<@&1054249730210791474> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249730210791474")) {
      await member.roles.remove('1054249730210791474')
      return interaction.reply({ content: '<@&1054249730210791474> Remove', ephemeral: true });
    }
  }
  //Hidden Private
  if(interaction.values == 'private')
  {
    if(!member.roles.cache.has("1054249734228951131")) {
      await member.roles.add('1054249734228951131')
      return interaction.reply({ content: '<@&1054249734228951131> Add', ephemeral: true });
    } else if(member.roles.cache.has("1054249734228951131")) {
      await member.roles.remove('1054249734228951131')
      return interaction.reply({ content: '<@&1054249734228951131> Remove', ephemeral: true });
    }
  }
  
  }
    }