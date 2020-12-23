module.exports = {
    name : 'langkahi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/i8YWUAAAAASUVORK5CYII.png');

        message.channel.send(attachment)
    }
}