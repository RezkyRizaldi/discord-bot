module.exports = {
    name : 'f',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730799166644682762/fyu.PNG');

        message.channel.send(attachment)
    }
}