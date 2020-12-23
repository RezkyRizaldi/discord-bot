module.exports = {
    name : 'naik',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200804_024417.jpg');

        message.channel.send(attachment)
    }
}