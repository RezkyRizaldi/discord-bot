module.exports = {
    name : 'lubang',
    description : '',
    execute(message, args){
        const {Client, MessageAttachment} = require('discord.js');
        let attachment = new MessageAttachment
        ('./db/IMG_20200715_104943.jpg');

        message.channel.send(attachment)
    }
}