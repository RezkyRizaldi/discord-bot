module.exports = {
    name : 'watame',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Capture.jpg');

        message.channel.send(attachment)
    }
}