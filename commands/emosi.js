module.exports = {
    name : 'emosi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/ngntol.png');

        message.channel.send(attachment)
    }
}