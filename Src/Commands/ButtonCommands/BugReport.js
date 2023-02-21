  const discordModals = require('discord-modals');
  const { Modal, TextInputComponent, showModal } = discordModals;
require('util').promisify(setTimeout);
module.exports = {
    name: "bugmodal",
    run: async(client, interaction, container) => {
      discordModals(client);
      if (interaction.isButton()) {
      if (interaction.customId === 'bugmodal') {
        const modal = new Modal() // We create a Modal
          .setCustomId('verification-modal')
          .setTitle('Report Bug | TNR')
          .addComponents([
            new TextInputComponent()
              .setCustomId('verification-input')
              .setLabel('REPORT TOPIC IS HERE')
              .setStyle('SHORT')
              .setMinLength(3)
              .setMaxLength(20)
              .setPlaceholder('موضوع باگ مورد نظر ')
              .setRequired(true),
  
              new TextInputComponent()
              .setCustomId('verification-input2')
              .setLabel('CONTENT TOPIC IS HERE')
              .setStyle('LONG')
              .setMinLength(3)
              .setMaxLength(400)
              .setPlaceholder('توضیحات بیشتر درباره باگ')
              .setRequired(true),
          ]);
        
        
  
        showModal(modal, {
          client,
          interaction,
        });
      }
    }
  }
    }
