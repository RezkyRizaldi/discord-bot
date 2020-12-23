module.exports = {
    name : 'yoi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200717_141313.jpg');

        message.channel.send(attachment)
    }
}