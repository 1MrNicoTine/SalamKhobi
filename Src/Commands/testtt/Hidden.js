
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: "hiddenrole",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  //hidden event
  if(interaction.values == 'hiddenevent')
  {
    if(!member.roles.cache.has("1003040447725309984")) {
      await member.roles.add('1003040447725309984')
      return interaction.reply({ content: '<@&1003040447725309984> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040447725309984")) {
      await member.roles.remove('1003040447725309984')
      return interaction.reply({ content: '<@&1003040447725309984> Remove', ephemeral: true });
    }
  }
//hidden grate
  if(interaction.values == 'hiddengrate')
  {
    if(!member.roles.cache.has("1003040448585150585")) {
      await member.roles.add('1003040448585150585')
      return interaction.reply({ content: '<@&1003040448585150585> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040448585150585")) {
      await member.roles.remove('1003040448585150585')
      return interaction.reply({ content: '<@&1003040448585150585> Remove', ephemeral: true });
    }
  }
  //hiddenadult
  if(interaction.values == 'hiddenadult')
  {
    if(!member.roles.cache.has("1003040449486930042")) {
      await member.roles.add('1003040449486930042')
      return interaction.reply({ content: '<@&1003040449486930042> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040449486930042")) {
      await member.roles.remove('1003040449486930042')
      return interaction.reply({ content: '<@&1003040449486930042> Remove', ephemeral: true });
    }
  }
  //hidden mafia
  if(interaction.values == 'hiddenmafia')
  {
    if(!member.roles.cache.has("1003040450338361364")) {
      await member.roles.add('1003040450338361364')
      return interaction.reply({ content: '<@&1003040450338361364> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040450338361364")) {
      await member.roles.remove('1003040450338361364')
      return interaction.reply({ content: '<@&1003040450338361364> Remove', ephemeral: true });
    }
  }
  //hidden cinama
  if(interaction.values == 'hiddencinema')
  {
    if(!member.roles.cache.has("1003040450971701279")) {
      await member.roles.add('1003040450971701279')
      return interaction.reply({ content: '<@&1003040450971701279> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040450971701279")) {
      await member.roles.remove('1003040450971701279')
      return interaction.reply({ content: '<@&1003040450971701279> Remove', ephemeral: true });
    }
  }
  //hiiden game
  if(interaction.values == 'hiddengame')
  {
    if(!member.roles.cache.has("1003040453425381396")) {
      await member.roles.add('1003040453425381396')
      return interaction.reply({ content: '<@&1003040453425381396> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040453425381396")) {
      await member.roles.remove('1003040453425381396')
      return interaction.reply({ content: '<@&1003040453425381396> Remove', ephemeral: true });
    }
  }
  //hidden music
  if(interaction.values == 'hiddenmusic')
  {
    if(!member.roles.cache.has("1003040452318085210")) {
      await member.roles.add('1003040452318085210')
      return interaction.reply({ content: '<@&1003040452318085210> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040452318085210")) {
      await member.roles.remove('1003040452318085210')
      return interaction.reply({ content: '<@&1003040452318085210> Remove', ephemeral: true });
    }
  }
}
}