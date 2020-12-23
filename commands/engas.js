module.exports = {
    name : 'engas',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/aruto.png');

        message.channel.send(attachment)
    }
}