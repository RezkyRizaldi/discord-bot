module.exports = {
    name : 'crot',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/muncrat.png');

        message.channel.send(attachment)
    }
}