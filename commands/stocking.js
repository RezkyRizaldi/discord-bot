module.exports = {
    name : 'stocking',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200801_235043.jpg');

        message.channel.send(attachment)
    }
}