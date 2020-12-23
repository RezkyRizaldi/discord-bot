module.exports = {
    name : 'hikmah',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/kont.png');

        message.channel.send(attachment)
    }
}