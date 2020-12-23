module.exports = {
    name : 'perut',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200805_152332.jpg');

        message.channel.send(attachment)
    }
}