const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const { Client, Message, MessageEmbed } = require("discord.js");
client.commands = new Discord.Collection();
const Menu = require("../menu")

module.exports = {
    name : 'list',
    description : '',
    execute(message, args){
        let cmd_list = ["info (info seputar bot dan juga list command)"];

        let list = new MessageEmbed()
            .setTitle("Command List")
            .setDescription(cmd_list);

        message.channel.send(list);
    }
}