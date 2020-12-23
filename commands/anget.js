module.exports = {
    name : 'anget',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/anget.png');

        message.channel.send(attachment)
    }
}