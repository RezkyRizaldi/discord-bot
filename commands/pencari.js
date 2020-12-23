module.exports = {
    name : 'pencari',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200710_190610-1.jpg');

        message.channel.send(attachment)
    }
}