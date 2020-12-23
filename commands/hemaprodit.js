module.exports = {
    name : 'hemaprodit',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200712_152646.jpg');

        message.channel.send(attachment)
    }
}