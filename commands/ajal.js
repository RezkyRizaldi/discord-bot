module.exports = {
    name : 'ajal',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730713000851537950/Screenshot_20200627-223747.png');

        message.channel.send(attachment)
    }
}