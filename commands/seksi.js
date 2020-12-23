module.exports = {
    name : 'seksi',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200804_193238.jpg');

        message.channel.send(attachment)
    }
}