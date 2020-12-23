module.exports = {
    name : 'naon',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/unknown-3.png');

        message.channel.send(attachment)
    }
}