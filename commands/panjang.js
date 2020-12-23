module.exports = {
    name : 'panjang',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200620_224153.jpg');

        message.channel.send(attachment)
    }
}