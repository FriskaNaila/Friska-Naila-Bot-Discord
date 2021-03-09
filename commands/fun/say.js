const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    const embed = new Discord.MessageEmbed()

        if (!args.join(" ")) {

      message.channel.send("Please add some text for me to repeat");

    }

    message.channel.send(args.join(" "), {

      allowedMentions: { parse: ["users"] }

    });

    message.delete();

  module.exports.help = {

    name: "say",

    description: "This command is use say commands a bot.",

    usage: "/say",

    accessableby: "Member",

    aliases: []

}][