module.exports = {
    name : 'ngejendol',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/ngejendol.png');

        message.channel.send(attachment)
    }
}