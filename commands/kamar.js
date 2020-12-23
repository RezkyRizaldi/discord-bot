module.exports = {
    name : 'kamar',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/Screenshot_2020-08-05-15-32-36-58.png');

        message.channel.send(attachment)
    }
}