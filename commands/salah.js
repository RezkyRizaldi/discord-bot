module.exports = {
    name : 'salah',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/lob.png');

        message.channel.send(attachment)
    }
}