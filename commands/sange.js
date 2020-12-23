module.exports = {
    name : 'sange',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('https://cdn.discordapp.com/attachments/715042456286265414/730807818944512020/egAAAABJRU5ErkJggg.png');

        message.channel.send(attachment)
    }
}