require('util').promisify(setTimeout);
module.exports = {
      data: { name: "devBug" },
      run: async (interaction) => {
        if (
          !interaction.member.roles.cache.has("1000723062662103091") &&
          !interaction.member.roles.cache.has("998930475211042847")
        )
          return;
        await interaction.deferReply({ ephemeral: true });
    
        await interaction.editReply({
          ephemeral: true,
          content: "گزینه مورد نظر را انتخاب کنید:",
          embeds: [{ description: `وضعیت ریپورت را مشخص کنید\nBUG ID:${interaction.message.id}` }],
          components: [
            {
              type: "ACTION_ROW",
              components: [
                {
                  type: "BUTTON",
                  label: "Fix Shod",
                  customId: "devBugFixed",
                  style: "SUCCESS",
                  emoji: " <:tik:998534063268827217> ",
                  url: null,
                  disabled: false,
                },
                {
                  type: "BUTTON",
                  label: "Reject",
                  customId: "devBugReject",
                  style: "DANGER",
                  emoji: " <:reject:998534074111103018> ",
                  url: null,
                  disabled: false,
                },
                {
                  type: "BUTTON",
                  label: "Wait",
                  customId: "devBugWait",
                  style: "SECONDARY",
                  emoji: " <a:load:998976512457969764> ",
                  url: null,
                  disabled: false,
                },
              ],
            },
          ],
        });
      },
    };