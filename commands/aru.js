module.exports = {
    name : 'aru',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/aru.png');

        message.channel.send(attachment)
    }
}