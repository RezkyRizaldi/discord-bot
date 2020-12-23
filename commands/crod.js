module.exports = {
    name : 'crod',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/eber.png');

        message.channel.send(attachment)
    }
}