const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'adu',
  ownerOnly: true,
    run: async (client, message, args, container) => {

      const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('adminduty')
      .setPlaceholder('Select To See Duty | انتخاب کن برای دیدن وظایف')
          //.setMinValues(1)
					//.setMaxValues(7)

      .addOptions([
        {
          label: '々 | Sheriff',
          description: "Click To See Sheriff Duty",
          value: 'sheriff',
          emoji : '1054648342065463296'
        },
        {
          label: '々 | LeaderShip',
          description: "Click To See LeaderShip Duty",
          value: 'leadership',
          emoji : '1054648539759788112'
        },
        {
          label: '々 | Collector',
          description: "Click To See Collector Duty",
          value: 'collector',
          emoji : '1054648988390936637'
        },{
          label: '々 | Almighty',
          description: "Click To See Almighty Duty",
          value: 'almighty',
          emoji : '1054648786724601876'
        },{
          label: '々 | Moderator',
          description: "Click To See Moderator Duty",
          value: 'moderator',
          emoji : '1054649129466339348'
        },{
          label: '々 | Marshal',
          description: "Click To See Marshal Duty",
          value: 'marshal',
          emoji : '1054649535277846619'
        },{
          label: '々 | Coordinator',
          description: "Click To See Coordinator Duty",
          value: 'coordinator',
          emoji : '1054649919748722708'
        },{
          label: '々 | Advisor',
          description: "Click To See Advisor Duty",
          value: 'advisor',
          emoji : '1054650259017564160'
        },{
          label: '々 | Event Host',
          description: "Click To See Event Host Duty",
          value: 'eventhost',
          emoji : '1054652321625276426'
        },{
          label: '々 | Master',
          description: "Click To See Master Duty",
          value: 'master',
          emoji : '1054651754899329044'
        },{
          label: '々 | Assistant',
          description: "Click To See Assistant Duty",
          value: 'assistant',
          emoji : '1054651907462922311'
        },{
          label: '々 | Support',
          description: "Click To See Support Duty",
          value: 'support',
          emoji : '1054652000664555611'
        },{
          label: '々 | Enforcer',
          description: "Click To See Enforcer Duty",
          value: 'enforcer',
          emoji : '1054652087117553684'
        }
        ])
      )
      
      const erules = new MessageEmbed()
	.setColor('000000')
	.setTitle('Admin Duty | وظایف ادمین')
 .setThumbnail('https://cdn.discordapp.com/attachments/975599013309079562/1054287342984237126/discord-avatar-128-3M8A9.gif')
	.setAuthor({ name: 'Admin Duty', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054460602468286534/Golden.png', url: '' })
	.setDescription('**سلام خدمت ادمین های عزیز\n با توجه به رول ادمینی که دارید از لیست زیر رول خود را انتخاب کنید تا وظایف شما را شرح دهد\n\n لحظات خوبی را برای شما عزیزان آرزومندیم **')
	.setImage('https://cdn.discordapp.com/attachments/1059199882784690198/1061422321946079262/Rules.png')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [erules], components: [row]})
  }
    }
    
