module.exports = {
    name : 'ntod',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200802_225826.jpg');

        message.channel.send(attachment)
    }
}