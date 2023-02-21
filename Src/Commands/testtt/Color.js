
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: "colorrole",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  //she
  if(interaction.values == 'she')
  {
    if(!member.roles.cache.has("1003040456814379108")) {
      await member.roles.add('1003040456814379108')
      return interaction.reply({ content: '<@&1003040456814379108> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040456814379108")) {
      await member.roles.remove('1003040456814379108')
      return interaction.reply({ content: '<@&1003040456814379108> Remove', ephemeral: true });
    }
  }
//golden
  if(interaction.values == 'golden')
  {
    if(!member.roles.cache.has("1003040460215951440")) {
      await member.roles.add('1003040460215951440')
      return interaction.reply({ content: '<@&1003040460215951440> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040460215951440")) {
      await member.roles.remove('1003040460215951440')
      return interaction.reply({ content: '<@&1003040460215951440> Remove', ephemeral: true });
    }
  }
  //indianred
  if(interaction.values == 'indianred')
  {
    if(!member.roles.cache.has("1003040461155483719")) {
      await member.roles.add('1003040461155483719')
      return interaction.reply({ content: '<@&1003040461155483719> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040461155483719")) {
      await member.roles.remove('1003040461155483719')
      return interaction.reply({ content: '<@&1003040461155483719> Remove', ephemeral: true });
    }
  }
  //lightsalmon
  if(interaction.values == 'lightsalmon')
  {
    if(!member.roles.cache.has("1003040462564753428")) {
      await member.roles.add('1003040462564753428')
      return interaction.reply({ content: '<@&1003040462564753428> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040462564753428")) {
      await member.roles.remove('1003040462564753428')
      return interaction.reply({ content: '<@&1003040462564753428> Remove', ephemeral: true });
    }
  }
  //Firebrick
  if(interaction.values == 'firebrick')
  {
    if(!member.roles.cache.has("1003040463542026320")) {
      await member.roles.add('1003040463542026320')
      return interaction.reply({ content: '<@&1003040463542026320> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040463542026320")) {
      await member.roles.remove('1003040463542026320')
      return interaction.reply({ content: '<@&1003040463542026320> Remove', ephemeral: true });
    }
  }
  //HotPink
  if(interaction.values == 'hotpink')
  {
    if(!member.roles.cache.has("1003040464410255521")) {
      await member.roles.add('1003040464410255521')
      return interaction.reply({ content: '<@&1003040464410255521> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040464410255521")) {
      await member.roles.remove('1003040464410255521')
      return interaction.reply({ content: '<@&1003040464410255521> Remove', ephemeral: true });
    }
  }
  //Mediumvioletred
  if(interaction.values == 'mediumvioletred')
  {
    if(!member.roles.cache.has("1003040465286864936")) {
      await member.roles.add('1003040465286864936')
      return interaction.reply({ content: '<@&1003040465286864936> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040465286864936")) {
      await member.roles.remove('1003040465286864936')
      return interaction.reply({ content: '<@&1003040465286864936> Remove', ephemeral: true });
    }
  }
  //Tomato
  if(interaction.values == 'tomato')
  {
    if(!member.roles.cache.has("1003040465974739066")) {
      await member.roles.add('1003040465974739066')
      return interaction.reply({ content: '<@&1003040465974739066> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040465974739066")) {
      await member.roles.remove('1003040465974739066')
      return interaction.reply({ content: '<@&1003040465974739066> Remove', ephemeral: true });
    }
  }
  //Orangered
  if(interaction.values == 'orangered')
  {
    if(!member.roles.cache.has("1003040467392397332")) {
      await member.roles.add('1003040467392397332')
      return interaction.reply({ content: '<@&1003040467392397332> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040467392397332")) {
      await member.roles.remove('1003040467392397332')
      return interaction.reply({ content: '<@&1003040467392397332> Remove', ephemeral: true });
    }
  }
  //Moccasin
  if(interaction.values == 'moccasin')
  {
    if(!member.roles.cache.has("1003040468315144335")) {
      await member.roles.add('1003040468315144335')
      return interaction.reply({ content: '<@&1003040468315144335> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040468315144335")) {
      await member.roles.remove('1003040468315144335')
      return interaction.reply({ content: '<@&1003040468315144335> Remove', ephemeral: true });
    }
  }
  //Lavender
  if(interaction.values == 'lavender')
  {
    if(!member.roles.cache.has("1003040469791543406")) {
      await member.roles.add('1003040469791543406')
      return interaction.reply({ content: '<@&1003040469791543406> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040469791543406")) {
      await member.roles.remove('1003040469791543406')
      return interaction.reply({ content: '<@&1003040469791543406> Remove', ephemeral: true });
    }
  }
  //Indigo
  if(interaction.values == 'indigo')
  {
    if(!member.roles.cache.has("1003040470756245514")) {
      await member.roles.add('1003040470756245514')
      return interaction.reply({ content: '<@&1003040470756245514> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040470756245514")) {
      await member.roles.remove('1003040470756245514')
      return interaction.reply({ content: '<@&1003040470756245514> Remove', ephemeral: true });
    }
  }
  //Lime
  if(interaction.values == 'lime')
  {
    if(!member.roles.cache.has("1003040471582515342")) {
      await member.roles.add('1003040471582515342')
      return interaction.reply({ content: '<@&1003040471582515342> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040471582515342")) {
      await member.roles.remove('1003040471582515342')
      return interaction.reply({ content: '<@&1003040471582515342> Remove', ephemeral: true });
    }
  }
  //Lightgreen
  if(interaction.values == 'lightgreen')
  {
    if(!member.roles.cache.has("1003040472870174810")) {
      await member.roles.add('1003040472870174810')
      return interaction.reply({ content: '<@&1003040472870174810> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040472870174810")) {
      await member.roles.remove('1003040472870174810')
      return interaction.reply({ content: '<@&1003040472870174810> Remove', ephemeral: true });
    }
  }
  //darkgreen
  if(interaction.values == 'darkgreen')
  {
    if(!member.roles.cache.has("1003040473935527998")) {
      await member.roles.add('1003040473935527998')
      return interaction.reply({ content: '<@&1003040473935527998> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040473935527998")) {
      await member.roles.remove('1003040473935527998')
      return interaction.reply({ content: '<@&1003040473935527998> Remove', ephemeral: true });
    }
  }
  //teal
  if(interaction.values == 'teal')
  {
    if(!member.roles.cache.has("1003040474967318538")) {
      await member.roles.add('1003040474967318538')
      return interaction.reply({ content: '<@&1003040474967318538> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040474967318538")) {
      await member.roles.remove('1003040474967318538')
      return interaction.reply({ content: '<@&1003040474967318538> Remove', ephemeral: true });
    }
  }
  //lightblue
  if(interaction.values == 'lightblue')
  {
    if(!member.roles.cache.has("1003040475852316772")) {
      await member.roles.add('1003040475852316772')
      return interaction.reply({ content: '<@&1003040475852316772> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040475852316772")) {
      await member.roles.remove('1003040475852316772')
      return interaction.reply({ content: '<@&1003040475852316772> Remove', ephemeral: true });
    }
  }
  //Midnightblue
  if(interaction.values == 'midnightblue')
  {
    if(!member.roles.cache.has("1003040476850573322")) {
      await member.roles.add('1003040476850573322')
      return interaction.reply({ content: '<@&1003040476850573322> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040476850573322")) {
      await member.roles.remove('1003040476850573322')
      return interaction.reply({ content: '<@&1003040476850573322> Remove', ephemeral: true });
    }
  }
  //maroon
  if(interaction.values == 'maroon')
  {
    if(!member.roles.cache.has("1003040477848817794")) {
      await member.roles.add('1003040477848817794')
      return interaction.reply({ content: '<@&1003040477848817794> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040477848817794")) {
      await member.roles.remove('1003040477848817794')
      return interaction.reply({ content: '<@&1003040477848817794> Remove', ephemeral: true });
    }
  }
  //Beige
  if(interaction.values == 'beige')
  {
    if(!member.roles.cache.has("1003040478817685595")) {
      await member.roles.add('1003040478817685595')
      return interaction.reply({ content: '<@&1003040478817685595> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040478817685595")) {
      await member.roles.remove('1003040478817685595')
      return interaction.reply({ content: '<@&1003040478817685595> Remove', ephemeral: true });
    }
  }
  //gray
  if(interaction.values == 'gray')
  {
    if(!member.roles.cache.has("1003040479677526096")) {
      await member.roles.add('1003040479677526096')
      return interaction.reply({ content: '<@&1003040479677526096> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040479677526096")) {
      await member.roles.remove('1003040479677526096')
      return interaction.reply({ content: '<@&1003040479677526096> Remove', ephemeral: true });
    }
  }
  //black
  if(interaction.values == 'black')
  {
    if(!member.roles.cache.has("1003040480629633074")) {
      await member.roles.add('1003040480629633074')
      return interaction.reply({ content: '<@&1003040480629633074> Add', ephemeral: true });
    } else if(member.roles.cache.has("1003040480629633074")) {
      await member.roles.remove('1003040480629633074')
      return interaction.reply({ content: '<@&1003040480629633074> Remove', ephemeral: true });
    }
  }
    }
}