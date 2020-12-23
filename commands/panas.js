module.exports = {
    name : 'panas',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200805_102601.jpg');

        message.channel.send(attachment)
    }
}