module.exports = {
    name : 'adventure',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/adventure.jpg');

        message.channel.send(attachment)
    }
}