module.exports = {
    name : 'gay',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730809160362622976/GAY.png');

        message.channel.send(attachment)
    }
}