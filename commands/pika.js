module.exports = {
    name : 'pika',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730807542162128958/unknown.png');

        message.channel.send(attachment)
    }
}