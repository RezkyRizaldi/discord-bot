module.exports = {
    name : 'agama',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/20200618_160505.jpg');

        message.channel.send(attachment)
    }
}