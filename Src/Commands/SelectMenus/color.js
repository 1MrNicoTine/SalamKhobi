
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: "colorrole",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  //Black
  if(interaction.values == 'black')
  {
    if(!member.roles.cache.has("1077353121472327752")) {
      await member.roles.add('1077353121472327752')
      return interaction.reply({ content: '<@&1077353121472327752> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353121472327752")) {
      await member.roles.remove('1077353121472327752')
      return interaction.reply({ content: '<@&1077353121472327752> Remove  Shod', ephemeral: true });
    }
  }
//Gray
  if(interaction.values == 'gray')
  {
    if(!member.roles.cache.has("1077353120184684675")) {
      await member.roles.add('1077353120184684675')
      return interaction.reply({ content: '<@&1077353120184684675> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353120184684675")) {
      await member.roles.remove('1077353120184684675')
      return interaction.reply({ content: '<@&1077353120184684675> Remove  Shod', ephemeral: true });
    }
  }
  //Darkblue
  if(interaction.values == 'darkblue')
  {
    if(!member.roles.cache.has("1077353122457985174")) {
      await member.roles.add('1077353122457985174')
      return interaction.reply({ content: '<@&1077353122457985174> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353122457985174")) {
      await member.roles.remove('1077353122457985174')
      return interaction.reply({ content: '<@&1077353122457985174> Remove  Shod', ephemeral: true });
    }
  }
  //Blue
  if(interaction.values == 'blue')
  {
    if(!member.roles.cache.has("1077353123598831667")) {
      await member.roles.add('1077353123598831667')
      return interaction.reply({ content: '<@&1077353123598831667> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353123598831667")) {
      await member.roles.remove('1077353123598831667')
      return interaction.reply({ content: '<@&1077353123598831667> Remove  Shod', ephemeral: true });
    }
  }
  //sky
  if(interaction.values == 'sky')
  {
    if(!member.roles.cache.has("1077353124597092423")) {
      await member.roles.add('1077353124597092423')
      return interaction.reply({ content: '<@&1077353124597092423> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353124597092423")) {
      await member.roles.remove('1077353124597092423')
      return interaction.reply({ content: '<@&1077353124597092423> Remove  Shod', ephemeral: true });
    }
  }
  //darkgreen
  if(interaction.values == 'darkgreen')
  {
    if(!member.roles.cache.has("1077353125683400724")) {
      await member.roles.add('1077353125683400724')
      return interaction.reply({ content: '<@&1077353125683400724> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353125683400724")) {
      await member.roles.remove('1077353125683400724')
      return interaction.reply({ content: '<@&1077353125683400724> Remove  Shod', ephemeral: true });
    }
  }
  //green
  if(interaction.values == 'green')
  {
    if(!member.roles.cache.has("1077353126547435532")) {
      await member.roles.add('1077353126547435532')
      return interaction.reply({ content: '<@&1077353126547435532> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353126547435532")) {
      await member.roles.remove('1077353126547435532')
      return interaction.reply({ content: '<@&1077353126547435532> Remove  Shod', ephemeral: true });
    }
  }
  //Palegreen
  if(interaction.values == 'palegreen')
  {
    if(!member.roles.cache.has("1077353127616983131")) {
      await member.roles.add('1077353127616983131')
      return interaction.reply({ content: '<@&1077353127616983131> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353127616983131")) {
      await member.roles.remove('1077353127616983131')
      return interaction.reply({ content: '<@&1077353127616983131> Remove  Shod', ephemeral: true });
    }
  }
  //lemon
  if(interaction.values == 'lemon')
  {
    if(!member.roles.cache.has("1077353129789636718")) {
      await member.roles.add('1077353129789636718')
      return interaction.reply({ content: '<@&1077353129789636718> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353129789636718")) {
      await member.roles.remove('1077353129789636718')
      return interaction.reply({ content: '<@&1077353129789636718> Remove  Shod', ephemeral: true });
    }
  }
  //golden
  if(interaction.values == 'golden')
  {
    if(!member.roles.cache.has("1077353128866885773")) {
      await member.roles.add('1077353128866885773')
      return interaction.reply({ content: '<@&1077353128866885773> Add', ephemeral: true });
    } else if(member.roles.cache.has("1077353128866885773")) {
      await member.roles.remove('1077353128866885773')
      return interaction.reply({ content: '<@&1077353128866885773> Remove', ephemeral: true });
    }
  }
  //Orange 
  if(interaction.values == 'orange')
  {
    if(!member.roles.cache.has("1077353130578170058")) {
      await member.roles.add('1077353130578170058')
      return interaction.reply({ content: '<@&1077353130578170058> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353130578170058")) {
      await member.roles.remove('1077353130578170058')
      return interaction.reply({ content: '<@&1077353130578170058> Remove  Shod', ephemeral: true });
    }
  }
  //Red
  if(interaction.values == 'red')
  {
    if(!member.roles.cache.has("1077353132390097007")) {
      await member.roles.add('1077353132390097007')
      return interaction.reply({ content: '<@&1077353132390097007> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353132390097007")) {
      await member.roles.remove('1077353132390097007')
      return interaction.reply({ content: '<@&1077353132390097007> Remove', ephemeral: true });
    }
  }
  //Pink
  if(interaction.values == 'pink')
  {
    if(!member.roles.cache.has("1077353133002457249")) {
      await member.roles.add('1077353133002457249')
      return interaction.reply({ content: '<@&1077353133002457249> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353133002457249")) {
      await member.roles.remove('1077353133002457249')
      return interaction.reply({ content: '<@&1077353133002457249> Remove  Shod', ephemeral: true });
    }
  }
  //Palepink
  if(interaction.values == 'palepink')
  {
    if(!member.roles.cache.has("1077353135414181930")) {
      await member.roles.add('1077353135414181930')
      return interaction.reply({ content: '<@&1077353135414181930> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353135414181930")) {
      await member.roles.remove('1077353135414181930')
      return interaction.reply({ content: '<@&1077353135414181930> Remove  Shod', ephemeral: true });
    }
  }
  //palepurple 
  if(interaction.values == 'palepurple')
  {
    if(!member.roles.cache.has("1077353136609558558")) {
      await member.roles.add('1077353136609558558')
      return interaction.reply({ content: '<@&1077353136609558558> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353136609558558")) {
      await member.roles.remove('1077353136609558558')
      return interaction.reply({ content: '<@&1077353136609558558> Remove  Shod', ephemeral: true });
    }
  }
  //Purple 
  if(interaction.values == 'purple')
  {
    if(!member.roles.cache.has("1077353138601865226")) {
      await member.roles.add('1077353138601865226')
      return interaction.reply({ content: '<@&1077353138601865226> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353138601865226")) {
      await member.roles.remove('1077353138601865226')
      return interaction.reply({ content: '<@&1077353138601865226> Remove  Shod', ephemeral: true });
    }
  }
  //Boldpurple 
  if(interaction.values == 'boldpurple')
  {
    if(!member.roles.cache.has("1077353137578459166")) {
      await member.roles.add('1077353137578459166')
      return interaction.reply({ content: '<@&1077353137578459166> Add  Shod', ephemeral: true });
    } else if(member.roles.cache.has("1077353137578459166")) {
      await member.roles.remove('1077353137578459166')
      return interaction.reply({ content: '<@&1077353137578459166> Remove  Shod', ephemeral: true });
    }
  }
  }
    }