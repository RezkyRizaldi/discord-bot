module.exports = {
    name : 'pantat',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200801_234833.jpg');

        message.channel.send(attachment)
    }
}