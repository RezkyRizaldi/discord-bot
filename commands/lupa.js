module.exports = {
    name : 'lupa',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/stin.png');

        message.channel.send(attachment)
    }
}