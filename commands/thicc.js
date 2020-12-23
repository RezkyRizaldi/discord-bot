module.exports = {
    name : 'thicc',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200801_235030.jpg');

        message.channel.send(attachment)
    }
}