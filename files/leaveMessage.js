
const botConfig = require("CHANGE ME"); // Change this to the right file
const discord = require("discord.js");
const client = new discord.Client();

client.on("guildMemberRemove", member => {
    var channel = member.guild.channels.cache.get('CHANGE ME'); // ID of the channel the notification will be sent in
    if(!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
    .setTitle("")
    .setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setDescription(`${member.user.username}`)
    .setColor("RED")
    .setTimestamp()
    .setFooter("Member Left")

    channel.send(leaveEmbed)
    
});
