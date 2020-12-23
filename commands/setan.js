module.exports = {
    name : 'setan',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200623_195512.jpg');

        message.channel.send(attachment)
    }
}