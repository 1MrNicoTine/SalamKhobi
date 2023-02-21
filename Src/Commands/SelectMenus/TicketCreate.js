const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports = {
    name : 'tickett',
    run : async(client, interaction, container) => {
      const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('del')
      .setPlaceholder('Use For Delete Ticket')
      .addOptions([
        {
          label: 'Delete | حذف',
          description: "For Delete Ticket",
          value: 'delete',
          emoji : ' <:trash:1062475453455155261> '
        }
        ]),
      )
      
        let category = "1059199883946512496"
        let radmin = interaction.guild.roles.cache.get('1061786164740247613')
        let moderation = interaction.guild.roles.cache.get('1061782909662543903')
      let configer = interaction.guild.roles.cache.get('1061786157739933747')
      let developer = interaction.guild.roles.cache.get('1061782915240972338')
      let designer = interaction.guild.roles.cache.get('1062520001451540610')

        let alivech = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)

        if (interaction.customId == "tickett") {
            if (alivech) return interaction.reply({content: '<a:ridi:1047243817599893514> شما ی تیکت باز داخل سرور دارید', ephemeral: true})
            if (interaction.values[0] == "general") {
                interaction.guild.channels.create(`❔ ┇${interaction.member.displayName}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${category}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: radmin,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }

                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
	.setColor('000000')
	.setTitle('General TICKT')
 .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('تیکت شما با موفقیت ساخته شد لطفا منتظر رسیدگی باشید\n > از داخل منو زیر میتوانید تیکت رو دلیت کنید')
	.setImage('https://cdn.discordapp.com/attachments/1059199882784690205/1062139852012933250/Image_20230109_2151.png')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
                    c.send({embeds: [embed], content: `${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:TNR1:1061723881561403402>  تیکت شما در چنل <#${c.id}> ساخته شد`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "handling") {
                interaction.guild.channels.create(`🚨 ┇${interaction.member.displayName}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${category}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: moderation,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }

                    ]
                }).then((c)=>{
                  const hembed = new MessageEmbed()
	.setColor('000000')
	.setTitle('Report TICKT')
    .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('تیکت شما با موفقیت ساخته شد لطفا منتظر رسیدگی باشید\n > از داخل منو زیر میتوانید تیکت رو دلیت کنید')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062518364578271242/C6E5AAE7-71B3-4E70-AA1F-3287E061B26C.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
                    c.send({embeds: [hembed], content: `${moderation} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:TNR1:1061723881561403402> تیکت شما در چنل <#${c.id}> ساخته شد`, ephemeral: true})
                })
            } else if (interaction.values[0] == "configer") {
                interaction.guild.channels.create(`🔨┇${interaction.member.displayName}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${category}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: configer,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
const cembed = new MessageEmbed()
	.setColor('000000')
	.setTitle('Configer TICKT')
    .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('تیکت شما با موفقیت ساخته شد لطفا منتظر رسیدگی باشید\n > از داخل منو زیر میتوانید تیکت رو دلیت کنید')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062645276931792906/F1B4C930-B43D-400D-92BE-937570F4C8FF.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
                    c.send({embeds: [cembed], content: `${configer} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:TNR1:1061723881561403402> تیکت شما در چنل <#${c.id}> ساخته شد`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "developer") {
                interaction.guild.channels.create(`💻 ┇${interaction.member.displayName}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${category}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: developer,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
const cembed = new MessageEmbed()
	.setColor('000000')
	.setTitle('Developer TICKT')
    .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('تیکت شما با موفقیت ساخته شد لطفا منتظر رسیدگی باشید\n > از داخل منو زیر میتوانید تیکت رو دلیت کنید')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062518364334993469/EAC70488-88F3-4E57-A8E2-D5A4C950C7EC.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
                    c.send({embeds: [cembed], content: `${developer} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:TNR1:1061723881561403402> تیکت شما در چنل <#${c.id}> ساخته شد`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "designer") {
                interaction.guild.channels.create(`🌈 ┇${interaction.member.displayName}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${category}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: designer,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
const cembed = new MessageEmbed()
	.setColor('000000')
	.setTitle('Designer TICKT')
    .setThumbnail('https://cdn.discordapp.com/attachments/1062384759231217804/1062386496109301830/941DEBA8-3D64-4EC9-AAF6-26342269D4AD.png')
	.setAuthor({ name: 'ƬПЯ TICKET', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png', url: '' })
	.setDescription('تیکت شما با موفقیت ساخته شد لطفا منتظر رسیدگی باشید\n > از داخل منو زیر میتوانید تیکت رو دلیت کنید')
	.setImage('https://cdn.discordapp.com/attachments/1062384759231217804/1062518364066553906/BC8F8E86-4E52-4E59-A3ED-99A2B3F4AC63.jpg')
	.setFooter({ text: ' | ƬПЯ', iconURL: 'https://cdn.discordapp.com/attachments/1062384759231217804/1062386496541306890/8EF02109-8D75-4905-8425-1CEFC9B6D376.png' });
                    c.send({embeds: [cembed], content: `${designer} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:TNR1:1061723881561403402> تیکت شما در چنل <#${c.id}> ساخته شد`, ephemeral: true})
                })



            }
        }
    }

    
                                                  }
                                                  

