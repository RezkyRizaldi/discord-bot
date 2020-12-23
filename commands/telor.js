module.exports = {
    name : 'telor',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_2020-08-10-12-54-01-40.jpg');

        message.channel.send(attachment)
    }
}