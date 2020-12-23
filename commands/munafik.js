module.exports = {
    name : 'munafik',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/730011438499758080/730713170452283452/Screenshot_20200625-001851.png');

        message.channel.send(attachment)
    }
}