module.exports = {
    name : 'terobos',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Capture2.jpg');

        message.channel.send(attachment)
    }
}