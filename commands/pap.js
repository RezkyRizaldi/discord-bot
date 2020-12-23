module.exports = {
    name : 'pap',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200620_224306.jpg');

        message.channel.send(attachment)
    }
}