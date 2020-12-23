module.exports = {
    name : 'dika-kun',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/dika_kun.png');

        message.channel.send(attachment)
    }
}