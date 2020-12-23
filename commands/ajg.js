module.exports = {
    name : 'ajg',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200714_033135.jpg');

        message.channel.send(attachment)
    }
}