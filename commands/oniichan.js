module.exports = {
    name : 'oniichan',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG-20200624-WA0063.png');

        message.channel.send(attachment)
    }
}