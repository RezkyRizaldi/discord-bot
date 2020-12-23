module.exports = {
    name : 'buli',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/jangan_bully.png');

        message.channel.send(attachment)
    }
}