module.exports = {
    name : 'liat',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200804_193337.jpg');

        message.channel.send(attachment)
    }
}