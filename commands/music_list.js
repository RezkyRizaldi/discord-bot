const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const { Client, Message, MessageEmbed } = require("discord.js");
client.commands = new Discord.Collection();
const Menu = require("../menu")

module.exports = {
    name : 'music_list',
    description : '',
    execute(message, args){
        let music_list = ["p (play dari yt link)", "dc (kalo pke command ini tag gw)", "q (cek queue)"];
        let list2 = new MessageEmbed()
            .setTitle("Music Command List")
            .setDescription(music_list);

        message.channel.send(list2);
    }
}