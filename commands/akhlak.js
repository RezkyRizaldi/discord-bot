module.exports = {
    name : 'akhlak',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/AKHLAK_SATAN.png');

        message.channel.send(attachment)
    }
}