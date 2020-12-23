module.exports = {
    name : 'dance',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/bol.png');

        message.channel.send(attachment)
    }
}