module.exports = {
    name : 'kucing',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200728_061043.jpg');

        message.channel.send(attachment)
    }
}