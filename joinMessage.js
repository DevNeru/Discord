const botConfig = require("CHANGE ME"); // Change this to the right file
const discord = require("discord.js");
const client = new discord.Client();

client.on("guildMemberAdd", member => {
    var role = member.guild.roles.cache.get('CHANGE ME'); // This should be the role that users get when they join. Right click the role and click "Copy ID"
    if(!role) return;
    member.roles.add(role);
    var channel = member.guild.channels.cache.get('CHANGE ME'); // ID of the channel the notification will be sent in
    if(!channel) return;

    var joinEmbed = new discord.MessageEmbed()
    .setTitle("")
    .setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setDescription(`${member.user.username}`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter("Member Joined")

    channel.send(joinEmbed)
    
});
