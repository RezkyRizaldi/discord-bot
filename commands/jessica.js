module.exports = {
    name : 'jessica',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730713170666061864/IMG-20200624-WA0083.png');

        message.channel.send(attachment)
    }
}