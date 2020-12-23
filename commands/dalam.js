module.exports = {
    name : 'dalam',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200620_224251.jpg');

        message.channel.send(attachment)
    }
}