module.exports = {
    name : 'sugoi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200805_210248.jpg');

        message.channel.send(attachment)
    }
}