module.exports = {
    name : 'buka',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/kdk.png');

        message.channel.send(attachment)
    }
}