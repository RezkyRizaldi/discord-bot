module.exports = {
    name : 'pentil',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200715_190717.jpg');

        message.channel.send(attachment)
    }
}