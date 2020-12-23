module.exports = {
    name : 'dajjal',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_2020-06-26-23-14-29-60.jpg');

        message.channel.send(attachment)
    }
}