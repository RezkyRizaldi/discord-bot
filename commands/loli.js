module.exports = {
    name : 'loli',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200711_204547.jpg');

        message.channel.send(attachment)
    }
}