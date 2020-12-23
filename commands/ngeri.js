module.exports = {
    name : 'ngeri',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/2.png');

        message.channel.send(attachment)
    }
}