const chalk = require("chalk")
const Box = require("cli-box")
module.exports = {
    name: "ready",
    once: true,
    run: async(client) => {
      const targetguild = client.guilds.cache.get("1076092896048062494")
       const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count + voiceChannel.members.size;
    const me = targetguild.members.cache.get(client.user.id)
         let target = client.guilds.cache.get("1063123378732531752")
var activevar = [`| ᴍ ᴇ ᴍ ʙ ᴇ ʀ : ${target.memberCount}  `,];
var activities = activevar[Math.floor(Math.random()*activevar.length)];
(activities)



      client.user.setActivity(activities , {
        type: "PLAYING",
      })
        const ClientBox = new Box({
            w: Math.floor(client.user.tag.length + 27 ),
            h: 7,
            stringify: false,
            marks: {
              nw: '╭',
              n: '─',
              ne: '╮',
              e: '│',
              se: '╯',
              s: '─',
              sw: '╰',
              w: '│'
            },
            hAlign: 'left',
          }, `C L I E N T   I N F O R M A T I O N

Client Details    ::    ${client.user.tag}\n
Guilds Count      ::    ${client.guilds.cache.size}\n
User Count        ::    ${client.users.cache.size}\n
NodeJS Version    ::    ${process.version}
`).stringify()

        const CommandsBox = new Box({
            w: Math.floor(`Initiating ${client.commands.messageCommands.aliases.size} messageCommands Aliases.`.length + 37),
            h: 8,
            stringify: false,
            marks: {
                nw: '╭',
                n: '─',
                ne: '╮',
                e: '│',
                se: '╯',
                s: '─',
                sw: '╰',
                w: '│'
            },
            hAlign: "left",
        }, `C O M M A N D S   I N F O R M A T I O N

MessageCommands            ::    Initiating ${client.commands.messageCommands.size} messageCommands.
MessageCommands Aliases    ::    Initiating ${client.commands.messageCommands.aliases.size} messageCommands Aliases.
SlashCommands              ::    Initiating ${client.commands.slashCommands.size} slashCommands.
SelectMenus                ::    Initiating ${client.commands.selectMenus.size} selectMenus.
ContextMenus               ::    Initiating ${client.commands.contextMenus.size} contextMenus.
ButtonCommands             ::    Initiating ${client.commands.buttonCommands.size} buttonCommands.
Client Events              ::    Initiating ${client.events.size} events.
`).stringify()

        console.log(chalk.bold.greenBright(ClientBox))
        console.log(chalk.bold.blueBright(CommandsBox))
    }
}