const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");
const { registerFont, createCanvas } = require('canvas')
registerFont('./Roboto-Regular.ttf', { family: 'Roboto' })

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
    client.on("guildMemberAdd", async member => {
      //If not in a guild return
      if(!member.guild) return;
      //create a new Canvas
      const canvas = Canvas.createCanvas(1772, 633);
      //make it "2D"
      const ctx = canvas.getContext('2d');
      //set the Background to the welcome.png
      const background = await Canvas.loadImage(`./welcome.png`);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#f2f2f2';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      //set the first text string 
      var textString3 = `${member.user.username}`;
      //if the text is too big then smaller the text
      if (textString3.length >= 14) {
        ctx.font = 'bold 100px "Roboto"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //else dont do it
      else {
        ctx.font = 'bold 150px "Roboto"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //define the Discriminator Tag
      var textString2 = `#${member.user.discriminator}`;
      ctx.font = 'bold 40px "Roboto"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString2, 730, canvas.height / 2 + 58);
      //define the Member count
      var textString4 = `Member #${member.guild.memberCount}`;
      ctx.font = 'bold 60px "Roboto"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);
      //get the Guild Name
      var textString4 = `${member.guild.name}`;
      ctx.font = 'bold 60px "Roboto"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);
      //create a circular "mask"
      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
      ctx.closePath();
      ctx.clip();
      //define the user avatar
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      //draw the avatar
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
      //get it as a discord attachment
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      //define the welcome embed
      const welcomeembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/867530793542746142/876568585324097556/welcome-icegif-1.gif")
        .setFooter("ARA™", member.guild.iconURL({ dynamic: true }))
        .setDescription(`**خیلی خوش آمدید به سرور بزرگ ${member.guild.name}!**
      سلام دوست عزیز <@${member.id}>! \n > داخل چنل <#1061275710754390096> قوانین را مطالعه کنید \n > داخل چنل <#1061275724457193492> رنگ مورد علاقه خود را انتخاب کنید \n \n **امید وار هستیم لحظات خوبی را سپری کنید**`)
        .setImage("attachment://welcome-image.png")
        .attachFiles(attachment);
      //define the welcome channel
      const channel = member.guild.channels.cache.find(ch => ch.id === config.CHANNEL_WELCOME);
      //send the welcome embed to there
      channel.send(`<@${member.id}>`,welcomeembed).then((message) => {
    message.delete({ timeout: 10000 });
});
    })
}