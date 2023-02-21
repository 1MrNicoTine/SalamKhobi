(async () => {
const Discord = require("discord.js");
const kepalive = require("./server.js");
const config = require("./Config");
const prefix = require("./Config");

const path = __dirname;
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_BANS,
      Discord.Intents.FLAGS.GUILD_INTEGRATIONS
    ],
    partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION"]
});
exports.client = client;
exports.path = path;
exports.config = config;
client.commands = {};
client.events = new Discord.Collection();
client.commands.messageCommands = new Discord.Collection();
client.commands.messageCommands.aliases = new Discord.Collection();
client.commands.contextMenus = new Discord.Collection();
client.commands.slashCommands = new Discord.Collection();
client.commands.buttonCommands = new Discord.Collection();
client.commands.selectMenus = new Discord.Collection();
    
const Handler = require(`${path}/Src/Structures/Handlers/Handler`);
await Handler.loadMessageCommands(client, path);
await Handler.loadEvents(client);
await client.login(config.token);
await Handler.loadSlashCommands(client, path);
await Handler.loadContextMenus(client, path);
await Handler.loadButtonCommands(client, path);
await Handler.loadSelectMenus(client, path);

client.on("ready" , () => {
  setInterval(() => {
      setTimeout(() => {
          client.user.setStatus('online')
      }, 1000)
      setTimeout(() => {
          client.user.setStatus('dnd')
      }, 2000)
      setTimeout(() => {
          client.user.setStatus('idle')
      }, 3000)
  }, 3000);
})



///rgb
client.on("ready", () => {
    console.log("RGB Started.");
    if (config.slowmode < 60000) console.log(`This slowmode is dangerous!!!`)
    let colors = [
      "#050505",
      "#889294",
      "#ffffff",
      "#ff769b",
      "#fa1562",
      "#e5103a",
      "#900090",
      "#ff00ff",
      "#cf77da",
      "#af00ff",
      "#5c00c2",
      "#3b0995",
      "#000091",
      "#0000ff",
      "#2d90eb",
      "#93ccff",
      "#00ffff",
      "#03cccc",
      "#008191",
      "#048f24",
      "#00fa9a",
      "#5ed89e",
      "#14fc5d",
      "#4eff00",
      "#b6ff47",
      "#ffcb00",
      "#ffff00",
      "#fff885",
      "#ff8a2f",
      "#ff6a00",
      "#ff4600",
      "#bd0000",
      "#dd0909",
      "#fe594d",
      "#958c71",
      "#810022"
  ]
    setInterval(() => {
        let cor = colors[Math.floor(Math.random() * colors.length)];
        client.guilds.cache.get(config.guild).roles.cache.get(config.role).setColor(cor)
        console.log("Role's color changed.")
    }, config.slowmode)

})
///rgb_end


//bug
client.on('modalSubmit', async (modal) => {
    if (modal.customId === 'verification-modal') {
      const response = modal.getTextInputValue('verification-input');
      const response2 = modal.getTextInputValue('verification-input2');
      modal.reply({ content: `✅ Report Submitd !\nCheck <#1054249781188362293>`, ephemeral: true }).then(() => {
        send(response, response2, modal)
      })
    }
  });
  
  function send(response, response2, modal) {
    const {
    MessageActionRow,
    MessageButton,
    MessageEmbed,
  } = require('discord.js');
    const row = new MessageActionRow()
              .addComponents(
          new MessageButton()
           .setLabel('Fixed It')
           .setStyle('SUCCESS')
            .setEmoji('<:oke:1012426124430684243>')
           .setCustomId('fixed'),
                  new MessageButton()
                   .setLabel('Reject')
           .setStyle('DANGER')
            .setEmoji('<:failde:1012426048148873257>')
           .setCustomId('reject'),
              );
  
    const bugReport = new MessageEmbed()
	.setColor('B22222')
	.setTitle(`New Bug: ${response}`)
 .setThumbnail('https://cdn.discordapp.com/attachments/1059199882784690205/1059441468869185556/9E990F0D-7E79-40CC-82EC-7D5C72CF4FE7.gif')
	.setAuthor({ name: 'LIQUID DEV', iconURL: 'https://cdn.discordapp.com/attachments/975599013309079562/1054460602468286534/Golden.png', url: '' })
	.setDescription(`Report: ${response2}\n\n> **Report By**\n> <@${modal.user.id}>`)
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
    
    const channel = client.channels.cache.get('1064680098084692019')
    channel.send({ content: `<@&1059199881958396089>`, embeds: [bugReport], components: [row] })
  }




  kepalive();
})()