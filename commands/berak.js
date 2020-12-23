module.exports = {
    name : 'berak',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/berak_paku.png');

        message.channel.send(attachment)
    }
}