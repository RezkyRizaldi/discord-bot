module.exports = {
    name : 'oneechan',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/ever.png');

        message.channel.send(attachment)
    }
}