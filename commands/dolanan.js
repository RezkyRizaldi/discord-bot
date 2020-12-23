module.exports = {
    name : 'dolanan',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200712_172706.jpg');

        message.channel.send(attachment)
    }
}