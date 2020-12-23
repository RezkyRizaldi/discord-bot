module.exports = {
    name : 'ecchi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/20200805_102403.jpg');

        message.channel.send(attachment)
    }
}